import './ProjectInfo.scoped.scss';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useElementSize } from '@/hooks/useElementSize';
import {
    useProjectQuery,
    UpdateProjectMutationVariables,
    useUpdateProjectMutation,
    ProjectQueryVariables
} from '@/graphql/generated';
import { formatDate } from '@/lib/date';
import { useQueryClient } from 'react-query';

import { ProjectInfoTitle } from '../ProjectInfoTitle';
import { TaskNumbers } from '../../../../molecules/TaskNumbers';

export type ProjectInfoProps = {
    className?: string;
};
ProjectInfo.defaultProps = {
    className: ''
};

export function ProjectInfo({ className }: ProjectInfoProps) {
    const { id } = useParams();
    const queryClient = useQueryClient();
    const query = useProjectQuery({ id: id as string });
    const mutation = useUpdateProjectMutation();
    const form = useForm<UpdateProjectMutationVariables>();

    const $header = useElementSize();
    const $layout = useElementSize();
    const bodySize = $layout.height - $header.height - 60;

    let updateTimeoutId: NodeJS.Timeout;
    const updateFn = () => {
        clearTimeout(updateTimeoutId);
        updateTimeoutId = setTimeout(async () => {
            const data: UpdateProjectMutationVariables = {
                description: form.getValues('description'),
                id: id as string
            };
            await mutation.mutateAsync(data);
            await queryClient.invalidateQueries([
                'project',
                { id } as ProjectQueryVariables
            ]);
        }, 2000);
    };

    useEffect(() => {
        if (query.isLoading) {
            form.reset({ description: 'fetching...' });
        } else {
            form.reset({
                description: query.data?.project?.description as string
            });
        }
    }, [query.data?.project?.description, query.isLoading]);

    useEffect(() => {
        form.reset({ description: query.data?.project?.description as string });
    }, [query.isLoading, query.data?.project.description]);

    return (
        <div className={`ProjectInfo ${className}`} ref={$layout.ref}>
            <div className="ProjectInfo-header" ref={$header.ref}>
                <ProjectInfoTitle />
            </div>
            <div className="ProjectInfo-body" style={{ height: bodySize }}>
                <ul className="ProjectInfo-info">
                    <li className="ProjectInfo-info-item">
                        <span className="ProjectInfo-info-item-title">
                            Created at
                        </span>
                        <span className="ProjectInfo-info-item-data">
                            {formatDate(
                                query.data?.project?.created_at ?? '1912-12-3'
                            )}
                        </span>
                    </li>
                    <li className="ProjectInfo-info-item">
                        <span className="ProjectInfo-info-item-title">
                            Owner
                        </span>
                        <span className="ProjectInfo-info-item-data">
                            {query.data?.project?.owner?.name}
                        </span>
                    </li>
                </ul>
                <div className="ProjectInfo-tasknum">
                    <TaskNumbers tasks={10} completed={5} />
                </div>
                <textarea
                    className="ProjectInfo-description"
                    {...form.register('description')}
                    onChange={updateFn}
                    disabled={!query.data?.project.grant.edit}
                />
            </div>
        </div>
    );
}
