import './RootTasks.scoped.scss';

import _ from 'lodash';
import { useEffect, useState } from 'react';
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
import { useTaskBranciesStore } from '../../stores/taskBrancies';

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
    const brancies = useTaskBranciesStore();
    const [oldChildrenCache, setOldChildrenCache] = useState<Task[]>([]);

    useEffect(() => {
        if (query.isLoading || !query.data?.project) return;
        if (_.isEqual(oldChildrenCache, query.data.project.tasks)) return;
        setOldChildrenCache(_.cloneDeep(query.data.project.tasks as Task[]));
        brancies.set('project', _.cloneDeep(query.data.project.tasks as Task[]));
    }, [query.isLoading, query.data?.project?.tasks]);

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
            <List tasks={brancies.get('project')} parentTaskId="project" />
            {query.data?.project.grant.operateTask ? (
                <div className="RootTasks-button">
                    <CreateButton onClick={createTask} />
                </div>
            ) : (
                ''
            )}
        </div>
    );
}
