import './TaskInfo.scoped.scss';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useElementSize } from '@/hooks/useElementSize';
import {
    UpdateTaskMutationVariables,
    useProjectQuery,
    useTaskQuery,
    useUpdateTaskMutation
} from '@/graphql/generated';
import { formatDate } from '@/lib/date';

import { TaskInfoTitlte } from '../TaskInfoTitlte';

export type TaskInfoProps = {
    className?: string;
};
TaskInfo.defaultProps = {
    className: ''
};

export function TaskInfo({ className }: TaskInfoProps) {
    const { id, taskId } = useParams();
    const query = useTaskQuery({
        project_id: id as string,
        id: taskId as string
    });
    const projectQuery = useProjectQuery({ id: id as string });
    const mutation = useUpdateTaskMutation();
    const form = useForm<UpdateTaskMutationVariables>();

    const $header = useElementSize();
    const $layout = useElementSize();
    const bodySize = $layout.height - $header.height - 60;

    let updateTimeoutId: NodeJS.Timeout;
    const updateFn = () => {
        clearTimeout(updateTimeoutId);
        updateTimeoutId = setTimeout(() => {
            const data: UpdateTaskMutationVariables = {
                description: form.getValues('description'),
                project_id: id as string,
                id: taskId as string
            };
            mutation.mutate(data);
        }, 2000);
    };

    useEffect(() => {
        if (query.isLoading) {
            form.reset({ description: 'fetching...' });
        } else {
            form.reset({
                description: query.data?.task?.description as string
            });
        }
    }, [query.data?.task?.description, query.isLoading]);

    useEffect(() => {
        form.reset({ description: query.data?.task?.description as string });
    }, [query.isLoading, query.data?.task?.description]);

    return (
        <div className={`TaskInfo ${className}`} ref={$layout.ref}>
            <div className="TaskInfo-header" ref={$header.ref}>
                <TaskInfoTitlte />
            </div>
            <div className="TaskInfo-body" style={{ height: bodySize }}>
                <ul className="TaskInfo-info">
                    <li className="TaskInfo-info-item">
                        <span className="TaskInfo-info-item-title">
                            Created at
                        </span>
                        <span className="TaskInfo-info-item-data">
                            {formatDate(
                                query.data?.task?.created_at ?? '1912-12-3'
                            )}
                        </span>
                    </li>
                    {/* <li className="TaskInfo-info-item">
                        <span className="TaskInfo-info-item-title">Owner</span>
                        <span className="TaskInfo-info-item-data">
                            {query.data?.task?.owner?.name}
                        </span>
                    </li> */}
                </ul>
                <textarea
                    className="TaskInfo-description"
                    {...form.register('description')}
                    onChange={updateFn}
                    disabled={!projectQuery.data?.project.grant.edit}
                />
            </div>
        </div>
    );
}
