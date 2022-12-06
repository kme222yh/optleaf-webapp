import './ProjectTeamMenberList.scoped.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { useElementSize } from '@/hooks/useElementSize';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';
import { useProjectQuery } from '@/graphql/generated';
import { Modal } from '@/features/dashboard/molecules/Modal';

import { ProjectTeams } from '../ProjectTeams';
import { ProjectMenbers } from '../ProjectMenbers';
import { AddTeamModal } from '../AddTeamModal';
import { AddUserModal } from '../AddUserModal';

export type ProjectTeamMenberListProps = {
    className?: string;
};
ProjectTeamMenberList.defaultProps = {
    className: ''
};

export function ProjectTeamMenberList({
    className
}: ProjectTeamMenberListProps) {
    const { id: projectId } = useParams();
    const modal = useModalManageStore();
    const query = useProjectQuery({ id: projectId as string });
    const [displayMenu, setDisplayMenu] = useState(false);
    const [view, setView] = useState<'menbers' | 'teams'>('menbers');
    const $body = useElementSize();
    const $switchTab = useElementSize();
    const $control = useElementSize();
    const contentHeight = $body.height - $switchTab.height - $control.height;

    useEffect(() => {
        if (!query.isLoading) {
            setDisplayMenu(query.data?.project?.grant.edit as boolean);
        }
    }, [query.data?.project?.name, query.isLoading]);

    return (
        <div className={`ProjectTeamMenberList ${className}`}>
            <div className="ProjectTeamMenberList-body" ref={$body.ref}>
                <div
                    className="ProjectTeamMenberList-switchTab"
                    ref={$switchTab.ref}
                >
                    <button
                        className={`ProjectTeamMenberList-switchTab-button ${
                            view === 'menbers' ? 'current' : ''
                        }`}
                        type="button"
                        onClick={() => setView('menbers')}
                    >
                        Menbers
                    </button>
                    <button
                        className={`ProjectTeamMenberList-switchTab-button ${
                            view === 'teams' ? 'current' : ''
                        }`}
                        type="button"
                        onClick={() => setView('teams')}
                    >
                        Teams
                    </button>
                </div>
                <div
                    className="ProjectTeamMenberList-control"
                    ref={$control.ref}
                >
                    <div className="ProjectTeamMenberList-form" />
                    {displayMenu ? (
                        <div className="ProjectTeamMenberList-create">
                            {view === 'menbers' ? (
                                <div
                                    className="ProjectTeamMenberList-create-button"
                                    onClick={() => modal.open('addUserMenu')}
                                    onKeyDown={() => modal.open('addUserMenu')}
                                    tabIndex={0}
                                    role="button"
                                >
                                    <FontAwesomeIcon icon={faUserPlus} />
                                </div>
                            ) : (
                                ''
                            )}
                            {view === 'teams' ? (
                                <div
                                    className="ProjectTeamMenberList-create-button"
                                    onClick={() => modal.open('addTeamMenu')}
                                    onKeyDown={() => modal.open('addTeamMenu')}
                                    tabIndex={0}
                                    role="button"
                                >
                                    <FontAwesomeIcon icon={faCirclePlus} />
                                </div>
                            ) : (
                                ''
                            )}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
                <div
                    className="ProjectTeamMenberList-content"
                    style={{ height: contentHeight }}
                >
                    {view === 'teams' ? <ProjectTeams /> : ''}
                    {view === 'menbers' ? <ProjectMenbers /> : ''}
                </div>
            </div>

            <Modal visible={modal.isOpened('addTeamMenu')}>
                <AddTeamModal />
            </Modal>
            <Modal visible={modal.isOpened('addUserMenu')}>
                <AddUserModal />
            </Modal>
        </div>
    );
}
