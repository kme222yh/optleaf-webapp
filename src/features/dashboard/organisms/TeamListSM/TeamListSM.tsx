import './TeamListSM.scoped.scss';

import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    useDashboardTopQuery,
    Team,
    useCreateTeamMutation,
    CreateTeamMutationVariables
} from '@/graphql/generated';

import { PreviewLink } from '../../molecules/PreviewLink';
import { PlusButtonSM } from '../../atoms/PlusButtonSM';
import { LoadingPreviewLink } from '../../molecules/LoadingPreviewLink';
import { useMessanger } from '../../hooks/useMessanger';
import { useModalManageStore } from '../../stores/modalManager';

export type TeamListSMProps = {
    className?: string;
    height?: string;
};
TeamListSM.defaultProps = {
    className: '',
    height: '500px'
};

export function TeamListSM({ className, height }: TeamListSMProps) {
    const query = useDashboardTopQuery();
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

    const $items = [];

    if (query.isLoading) {
        for (let i = 0; i < 2; i += 1) {
            $items.push(
                <li className="TeamListSM-item" key={i}>
                    <LoadingPreviewLink />
                </li>
            );
        }
    } else {
        const teams = query.data?.teams;
        let itemsLength = 0;
        itemsLength = Array.isArray(teams) ? teams.length : 0;
        for (let i = 0; i < itemsLength; i += 1) {
            if (i > 3) break;
            const team = (teams as Team[])[i];
            const icons: string[] = [];
            icons.push(team.owner?.icon_image as string);
            if (Array.isArray(team.administrators)) {
                team.administrators.forEach((user) => {
                    icons.push(user?.icon_image as string);
                });
            }
            if (Array.isArray(team.menbers)) {
                team.menbers.forEach((user) => {
                    icons.push(user?.icon_image as string);
                });
            }
            $items.push(
                <li className="TeamListSM-item" key={i}>
                    <PreviewLink
                        content={team.description as string}
                        icons={icons}
                        name={team.name as string}
                        to={`/team/${team.id}`}
                    />
                </li>
            );
        }
        $items.push(
            <li className="TeamListSM-item" key={itemsLength}>
                <PlusButtonSM onClick={createFn} />
            </li>
        );
    }
    return (
        <div className={`TeamListSM ${className}`} style={{ height }}>
            <ul className="TeamListSM-body">{$items}</ul>
        </div>
    );
}
