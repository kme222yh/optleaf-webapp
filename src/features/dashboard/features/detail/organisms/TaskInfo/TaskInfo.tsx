import './TaskInfo.scoped.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
    UpdateTaskMutationVariables,
    useProjectQuery,
    useTaskQuery,
    useUpdateTaskMutation
} from '@/graphql/generated';
import { formatDate } from '@/lib/date';
import { useMessanger } from '@/features/dashboard/hooks/useMessanger';

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
    const messanger = useMessanger();
    const [isFocused, setIsFocused] = useState(false);

    let updateTimeoutId: NodeJS.Timeout;
    const updateFn = (event: any) => {
        clearTimeout(updateTimeoutId);
        updateTimeoutId = setTimeout(async () => {
            const data: UpdateTaskMutationVariables = {
                description:
                    event?.target?.value ?? form.getValues('description'),
                project_id: id as string,
                id: taskId as string
            };
            try {
                await mutation.mutateAsync(data);
            } catch (error) {
                messanger.push('Failed to update.', 'warning');
            }
        }, 2000);
    };

    useEffect(() => {
        if (query.isLoading) {
            form.reset({ description: 'fetching...' });
            return;
        }
        if (isFocused) return;
        form.reset({ description: query.data?.task?.description as string });
    }, [query.data?.task?.description, query.isLoading]);

    return (
        <div className={`TaskInfo ${className}`}>
            <div className="TaskInfo-header">
                <TaskInfoTitlte />
            </div>
            <div className="TaskInfo-body">
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
                </ul>
                <textarea
                    className="TaskInfo-description"
                    {...form.register('description')}
                    onChange={updateFn}
                    disabled={
                        !projectQuery.data?.project.grant.edit ||
                        query.isLoading
                    }
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>
        </div>
    );
}
