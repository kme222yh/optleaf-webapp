import './TeamInfoTitle.scoped.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    useTeamQuery,
    UpdateTeamMutationVariables,
    useUpdateTeamMutation,
    TeamQueryVariables
} from '@/graphql/generated';
import { useForm } from 'react-hook-form';
import { useQueryClient } from 'react-query';

import { InfoTitleWrapper } from '../../molecules/InfoTitleWrapper';
import { TeamDangerMenu } from '../TeamDangerMenu';

export type TeamInfoTitleProps = {
    className?: string;
};
TeamInfoTitle.defaultProps = {
    className: ''
};

export function TeamInfoTitle({ className }: TeamInfoTitleProps) {
    const [displayMenu, setDisplayMenu] = useState(false);

    const { teamId } = useParams();
    const queryClient = useQueryClient();
    const query = useTeamQuery({ id: teamId as string });
    const mutation = useUpdateTeamMutation();
    const form = useForm<UpdateTeamMutationVariables>();

    useEffect(() => {
        if (query.isLoading) {
            form.reset({ name: 'fetching...' });
        } else {
            setDisplayMenu(query.data?.team?.grant.dangerZone as boolean);
            form.reset({ name: query.data?.team?.name as string });
        }
    }, [query.data?.team?.name, query.isLoading]);

    let updateTimeoutId: NodeJS.Timeout;
    const updateFn = (event: any) => {
        clearTimeout(updateTimeoutId);
        updateTimeoutId = setTimeout(async () => {
            const data: UpdateTeamMutationVariables = {
                name: event?.target?.value ?? form.getValues('name'),
                id: teamId as string
            };
            await mutation.mutateAsync(data);
            await queryClient.invalidateQueries([
                'team',
                { id: teamId } as TeamQueryVariables
            ]);
        }, 2000);
    };

    return (
        <div className={`TeamInfoTitle ${className}`}>
            <InfoTitleWrapper
                title={
                    <input
                        className="TeamInfoTitle-inline"
                        type="text"
                        {...form.register('name')}
                        onChange={updateFn}
                        disabled={!query.data?.team.grant.edit}
                    />
                }
                menu={<TeamDangerMenu />}
                displayMenu={displayMenu}
            />
        </div>
    );
}
