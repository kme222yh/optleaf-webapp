import './TeamDangerMenu.scoped.scss';

import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useDeleteTeamMutation, useTeamQuery } from '@/graphql/generated';

import { OperationPanel } from '../../molecules/OperationPanel';
import { useModalManageStore } from '../../../../stores/modalManager';

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
            await deleteMutator.mutateAsync({ id: teamId as string });
            await queryQrient.resetQueries(['dashboardTop']);
            navigator('/teams');
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
                    onClick={() => {}}
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
        </ul>
    );
}
