import './TeamMembersList.scoped.scss';

import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { useModalManageStore } from '@/features/dashboard/stores/modalManager';
import { Modal } from '@/features/dashboard/molecules/Modal';
import { useTeamQuery } from '@/graphql/generated';

import { TeamMenbers } from '../TeamMenbers';
import { TeamAddUserModal } from '../TeamAddUserModal';

export type TeamMembersListProps = {
    className?: string;
};
TeamMembersList.defaultProps = {
    className: ''
};

export function TeamMembersList({ className }: TeamMembersListProps) {
    const { teamId } = useParams();
    const teamQuery = useTeamQuery({ id: teamId as string });
    const modal = useModalManageStore();
    return (
        <div className={`TeamMembersList ${className}`}>
            {teamQuery.data?.team.grant.edit ? (
                <div className="TeamMembersList-control">
                    <div className="TeamMembersList-create-button">
                        <div
                            className="TeamMembersList-create-button"
                            onClick={() => modal.open('addUserMenu')}
                            onKeyDown={() => modal.open('addUserMenu')}
                            tabIndex={0}
                            role="button"
                        >
                            <FontAwesomeIcon icon={faUserPlus} />
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            <div className="TeamMembersList-list">
                <TeamMenbers id={teamId as string} />
            </div>
            <Modal visible={modal.isOpened('addUserMenu')}>
                <TeamAddUserModal />
            </Modal>
        </div>
    );
}
