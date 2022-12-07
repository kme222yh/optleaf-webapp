import './TeamInfo.scoped.scss';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useElementSize } from '@/hooks/useElementSize';
import {
    useTeamQuery,
    UpdateTeamMutationVariables,
    useUpdateTeamMutation,
    TeamQueryVariables
} from '@/graphql/generated';
import { formatDate } from '@/lib/date';
import { useQueryClient } from 'react-query';

import { TeamInfoTitle } from '../TeamInfoTitle';

export type TeamInfoProps = {
    className?: string;
};
TeamInfo.defaultProps = {
    className: ''
};

export function TeamInfo({ className }: TeamInfoProps) {
    const { teamId } = useParams();
    const queryClient = useQueryClient();
    const query = useTeamQuery({ id: teamId as string });
    const mutation = useUpdateTeamMutation();
    const form = useForm<UpdateTeamMutationVariables>();

    const $header = useElementSize();
    const $layout = useElementSize();
    const bodySize = $layout.height - $header.height - 60;

    let updateTimeoutId: NodeJS.Timeout;
    const updateFn = (event: any) => {
        clearTimeout(updateTimeoutId);
        updateTimeoutId = setTimeout(async () => {
            const data: UpdateTeamMutationVariables = {
                description:
                    event?.target?.value ?? form.getValues('description'),
                id: teamId as string
            };
            await mutation.mutateAsync(data);
            await queryClient.invalidateQueries([
                'team',
                { id: teamId } as TeamQueryVariables
            ]);
        }, 2000);
    };

    useEffect(() => {
        if (query.isLoading) {
            form.reset({ description: 'fetching...' });
        } else {
            form.reset({
                description: query.data?.team?.description as string
            });
        }
    }, [query.data?.team?.description, query.isLoading]);

    useEffect(() => {
        form.reset({ description: query.data?.team?.description as string });
    }, [query.isLoading, query.data?.team.description]);

    return (
        <div className={`TeamInfo ${className}`} ref={$layout.ref}>
            <div className="TeamInfo-header" ref={$header.ref}>
                <TeamInfoTitle />
            </div>
            <div className="TeamInfo-body" style={{ height: bodySize }}>
                <ul className="TeamInfo-info">
                    <li className="TeamInfo-info-item">
                        <span className="TeamInfo-info-item-title">
                            Created at
                        </span>
                        <span className="TeamInfo-info-item-data">
                            {formatDate(
                                query.data?.team?.created_at ?? '1912-12-3'
                            )}
                        </span>
                    </li>
                    <li className="TeamInfo-info-item">
                        <span className="TeamInfo-info-item-title">Owner</span>
                        <span className="TeamInfo-info-item-data">
                            {query.data?.team?.owner?.name}
                        </span>
                    </li>
                </ul>
                <textarea
                    className="TeamInfo-description"
                    {...form.register('description')}
                    onChange={updateFn}
                    disabled={!query.data?.team.grant.edit}
                />
            </div>
        </div>
    );
}
