import './ProjectTeamMenberList.scoped.scss';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import { useElementSize } from '@/hooks/useElementSize';

import { ProjectTeams } from '../ProjectTeams';
import { ProjectMenbers } from '../ProjectMenbers';

export type ProjectTeamMenberListProps = {
    className?: string;
};
ProjectTeamMenberList.defaultProps = {
    className: ''
};

export function ProjectTeamMenberList({
    className
}: ProjectTeamMenberListProps) {
    const [view, setView] = useState<'menbers' | 'teams'>('menbers');
    const $body = useElementSize();
    const $switchTab = useElementSize();
    const $control = useElementSize();
    const contentHeight = $body.height - $switchTab.height - $control.height;

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
                    <div className="ProjectTeamMenberList-create">
                        {view === 'menbers' ? (
                            <div className="ProjectTeamMenberList-create-button">
                                <FontAwesomeIcon icon={faUserPlus} />
                            </div>
                        ) : (
                            ''
                        )}
                        {view === 'teams' ? (
                            <div className="ProjectTeamMenberList-create-button">
                                <FontAwesomeIcon icon={faCirclePlus} />
                            </div>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
                <div
                    className="ProjectTeamMenberList-content"
                    style={{ height: contentHeight }}
                >
                    {view === 'teams' ? <ProjectTeams /> : ''}
                    {view === 'menbers' ? <ProjectMenbers /> : ''}
                </div>
            </div>
        </div>
    );
}
