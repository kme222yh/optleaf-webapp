import './RootTasks.scoped.scss';

import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    useProjectQuery,
    useCreateTaskMutation,
    Task
} from '@/graphql/generated';

import { List } from '../../molecules/List';
import { CreateButton } from '../../atoms/CreateButton';
import { useModalManageStore } from '../../../../stores/modalManager';

export type RootTasksProps = {
    className?: string;
};
RootTasks.defaultProps = {
    className: ''
};

export function RootTasks({ className }: RootTasksProps) {
    const { id } = useParams();
    const query = useProjectQuery({ id: id as string });
    const mutator = useCreateTaskMutation();
    const navigator = useNavigate();
    const queryClient = useQueryClient();
    const modal = useModalManageStore();

    const tasks = (query.isLoading ? [] : query.data?.project.tasks) as Task[];

    const createTask = async () => {
        modal.open('ScreenTransition');
        const task = await mutator.mutateAsync({
            project_id: id as string,
            name: 'New Task',
            description: 'This is new Task'
        });
        await queryClient.resetQueries(['project', { id }]);
        navigator(`/project/${id as string}/${String(task.createTask?.id)}`);
        modal.close();
    };

    return (
        <div className={`RootTasks ${className}`}>
            <List tasks={tasks} />
            <div className="RootTasks-button">
                <CreateButton onClick={createTask} />
            </div>
        </div>
    );
}
