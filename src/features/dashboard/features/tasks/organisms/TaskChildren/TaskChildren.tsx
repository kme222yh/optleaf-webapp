import './TaskChildren.scoped.scss';

import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useTaskQuery, useCreateTaskMutation, Task } from '@/graphql/generated';

import { List } from '../../molecules/List';
import { CreateButton } from '../../atoms/CreateButton';
import { useModalManageStore } from '../../../../stores/modalManager';

export type TaskChildrenProps = {
    className?: string;
    projectId: string;
    taskId: string;
};
TaskChildren.defaultProps = {
    className: ''
};

export function TaskChildren({
    className,
    projectId,
    taskId
}: TaskChildrenProps) {
    const query = useTaskQuery({
        project_id: projectId as string,
        id: taskId as string
    });
    const mutator = useCreateTaskMutation();
    const navigator = useNavigate();
    const queryClient = useQueryClient();
    const modal = useModalManageStore();

    const tasks = (query.isLoading ? [] : query.data?.task?.children) as Task[];

    const createTask = async () => {
        modal.open('ScreenTransition');
        const task = await mutator.mutateAsync({
            project_id: projectId as string,
            task_id: taskId,
            name: 'New Task',
            description: 'This is new Task'
        });
        await queryClient.resetQueries([
            'task',
            { project_id: projectId as string, id: taskId as string }
        ]);
        navigator(
            `/project/${projectId as string}/${String(task.createTask?.id)}`
        );
        modal.close();
    };

    return (
        <div className={`TaskChildren ${className}`}>
            <List tasks={tasks} />
            <div className="TaskChildren-button">
                <CreateButton onClick={createTask} />
            </div>
        </div>
    );
}
