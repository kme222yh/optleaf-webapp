import './TeamDangerMenu.scoped.scss';

import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useDeleteTeamMutation, useTeamQuery } from '@/graphql/generated';
import { Modal } from '@/features/dashboard/molecules/Modal';
import { useMessanger } from '@/features/dashboard/hooks/useMessanger';

import { OperationPanel } from '../../molecules/OperationPanel';
import { useModalManageStore } from '../../../../stores/modalManager';
import { TeamAccessRestrictionModal } from '../TeamAccessRestrictionModal';

export type TeamDangerMenuProps = {
    className?: string;
};
TeamDangerMenu.defaultProps = {
    className: ''
};

export function TeamDangerMenu({ className }: TeamDangerMenuProps) {
    const { teamId } = useParams();
    const query = useTeamQuery({ id: teamId as string });
    const navigator = useNavigate();
    const deleteMutator = useDeleteTeamMutation();
    const queryQrient = useQueryClient();
    const modal = useModalManageStore();
    const messanger = useMessanger();

    let restriction = '';
    switch (query.data?.team.permission_level as string) {
        case 'owner':
            restriction = 'owner';
            break;
        case 'administrators':
            restriction = 'administrator or above';
            break;
        default:
            break;
    }

    const deleteFn = async () => {
        const result = window.confirm('Do you want to delete?');
        if (result) {
            modal.open('ScreenTransition');
            try {
                const team = await deleteMutator.mutateAsync({
                    id: teamId as string
                });
                await queryQrient.resetQueries(['dashboardTop']);
                navigator('/teams');
                messanger.push(
                    `${team.deleteTeam?.name ?? 'Team'} was deleted.`,
                    'success'
                );
            } catch (error) {
                messanger.push('Failed to delete team.', 'warning');
            }
            modal.close();
        }
    };

    return (
        <ul className={`TeamDangerMenu ${className}`}>
            <li className="TeamDangerMenu-item">
                <OperationPanel
                    title="Change access restrictions."
                    content={`Currently, the teams's information and members are editable by ${restriction}.`}
                    button="Change"
                    onClick={() => {
                        modal.open('RestrictionMenu');
                    }}
                />
            </li>
            <li className="TeamDangerMenu-item">
                <OperationPanel
                    title="Delete the team."
                    content="The team is permanently deleted. This operation cannot be undone."
                    button="Delete"
                    warning
                    onClick={deleteFn}
                />
            </li>
            <Modal visible={modal.isOpened('RestrictionMenu')}>
                <TeamAccessRestrictionModal />
            </Modal>
        </ul>
    );
}
