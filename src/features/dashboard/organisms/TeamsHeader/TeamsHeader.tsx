import './TeamsHeader.scoped.scss';

import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    useCreateTeamMutation,
    CreateTeamMutationVariables
} from '@/graphql/generated';
import { useModalManageStore } from '../../stores/modalManager';

import { SearchForm } from '../SearchForm';
import { RoundedButton } from '../../atoms/RoundedButton';
import { useMessanger } from '../../hooks/useMessanger';

export type TeamsHeaderProps = {
    className?: string;
};
TeamsHeader.defaultProps = {
    className: ''
};

export function TeamsHeader({ className }: TeamsHeaderProps) {
    const navigator = useNavigate();
    const modal = useModalManageStore();
    const mutator = useCreateTeamMutation();
    const queryQrient = useQueryClient();
    const messanger = useMessanger();

    const createFn = async () => {
        modal.open('ScreenTransition');
        try {
            const result = await mutator.mutateAsync({
                name: 'New Team',
                description: 'This is new team.'
            } as CreateTeamMutationVariables);
            queryQrient.resetQueries(['dashboardTop']);
            navigator(`/team/${result.createTeam?.id}`);
            messanger.push('New team was created.', 'success');
        } catch (error) {
            messanger.push('Failed to create team.', 'warning');
        }
        modal.close();
    };

    return (
        <div className={`TeamsHeader ${className}`}>
            <div className="TeamsHeader-left">
                <RoundedButton text="Create Team" onClick={createFn} />
            </div>
            <div className="TeamsHeader-right">
                <SearchForm />
            </div>
        </div>
    );
}
