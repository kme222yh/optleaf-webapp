import './TaskInfoTitlte.scoped.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
    useTaskQuery,
    useProjectQuery,
    UpdateTaskMutationVariables,
    useUpdateTaskMutation
} from '@/graphql/generated';
import { useForm } from 'react-hook-form';

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

    const { id, taskId } = useParams();
    const query = useTaskQuery({
        project_id: id as string,
        id: taskId as string
    });
    const projectQuery = useProjectQuery({ id: id as string });
    const mutation = useUpdateTaskMutation();
    const form = useForm<UpdateTaskMutationVariables>();

    useEffect(() => {
        if (query.isLoading) {
            form.reset({ name: 'fetching...' });
        } else {
            form.reset({ name: query.data?.task?.name as string });
        }
    }, [query.data?.task?.name, query.isLoading]);
    useEffect(() => {
        if (!projectQuery.isLoading) {
            setDisplayMenu(
                projectQuery.data?.project?.grant.operateTask as boolean
            );
        }
    }, [projectQuery.data?.project.grant, projectQuery.isLoading]);

    let updateTimeoutId: NodeJS.Timeout;
    const updateFn = () => {
        clearTimeout(updateTimeoutId);
        updateTimeoutId = setTimeout(() => {
            const data: UpdateTaskMutationVariables = {
                name: form.getValues('name'),
                project_id: id as string,
                id: taskId as string
            };
            mutation.mutate(data);
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
                            !projectQuery.data?.project?.grant.operateTask
                        }
                    />
                }
                menu={<TaskDangerMenu />}
                displayMenu={displayMenu}
            />
        </div>
    );
}
