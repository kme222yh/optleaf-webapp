import './TaskInfoTitlte.scoped.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { useForm } from 'react-hook-form';

import {
    useTaskQuery,
    useProjectQuery,
    UpdateTaskMutationVariables,
    TaskQueryVariables,
    useUpdateTaskMutation,
    ProjectQueryVariables
} from '@/graphql/generated';
import { useMessanger } from '@/features/dashboard/hooks/useMessanger';

import { InfoTitleWrapper } from '../../molecules/InfoTitleWrapper';
import { TaskDangerMenu } from '../TaskDangerMenu';

export type TaskInfoTitlteProps = {
    className?: string;
};
TaskInfoTitlte.defaultProps = {
    className: ''
};

export function TaskInfoTitlte({ className }: TaskInfoTitlteProps) {
    const [displayMenu, setDisplayMenu] = useState(false);
    const queryClient = useQueryClient();
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

    useEffect(() => {
        if (query.isLoading) {
            form.reset({ name: 'fetching...' });
            return;
        }
        if (isFocused) return;
        form.reset({ name: query.data?.task?.name as string });
    }, [query.isLoading, query.data?.task?.name]);

    useEffect(() => {
        if (!projectQuery.isLoading) {
            setDisplayMenu(
                projectQuery.data?.project?.grant.operateTask as boolean
            );
        }
    }, [projectQuery.data?.project.grant, projectQuery.isLoading]);

    let updateTimeoutId: NodeJS.Timeout;
    const updateFn = (event: any) => {
        clearTimeout(updateTimeoutId);
        updateTimeoutId = setTimeout(async () => {
            if (!event?.target?.value ?? form.getValues('name')) return;
            const data: UpdateTaskMutationVariables = {
                name: event?.target?.value ?? form.getValues('name'),
                project_id: id as string,
                id: taskId as string
            };
            try {
                await mutation.mutateAsync(data);
                await queryClient.invalidateQueries([
                    'task',
                    {
                        project_id: id as string,
                        id: taskId as string
                    } as TaskQueryVariables
                ]);
                if (query.data?.task?.parent?.id) {
                    await queryClient.invalidateQueries([
                        'task',
                        {
                            project_id: id as string,
                            id: query.data?.task?.parent?.id as string
                        } as TaskQueryVariables
                    ]);
                } else {
                    await queryClient.invalidateQueries([
                        'project',
                        { id } as ProjectQueryVariables
                    ]);
                }
            } catch (error) {
                messanger.push('Failed to update.', 'warning');
            }
        }, 2000);
    };

    return (
        <div className={`TaskInfoTitlte ${className}`}>
            <InfoTitleWrapper
                title={
                    <input
                        className="TaskInfoTitlte-inline"
                        type="text"
                        {...form.register('name')}
                        onChange={updateFn}
                        disabled={
                            !projectQuery.data?.project?.grant.operateTask &&
                            query.isLoading
                        }
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                }
                menu={<TaskDangerMenu />}
                displayMenu={displayMenu}
            />
        </div>
    );
}
