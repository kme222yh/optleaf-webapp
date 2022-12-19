import './Children.scoped.scss';

import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    useTaskQuery,
    useCreateTaskMutation,
    Task,
    useProjectQuery,
    useUpdateTaskMutation,
    UpdateTaskMutationVariables,
    TaskQueryVariables
} from '@/graphql/generated';

import { List } from '../../molecules/List';
import { CreateButton } from '../../atoms/CreateButton';
import { useModalManageStore } from '../../../../stores/modalManager';
import { useTaskBranciesStore } from '../../stores/taskBrancies';
import { useNodeTreeStore } from '../../stores/nodeTree';

export type ChildrenProps = {
    className?: string;
    projectId: string;
    taskId: string;
};
Children.defaultProps = {
    className: ''
};

export function Children({ className, projectId, taskId }: ChildrenProps) {
    const query = useTaskQuery({
        project_id: projectId as string,
        id: taskId as string
    });
    const projectQuery = useProjectQuery({ id: projectId });
    const createMutator = useCreateTaskMutation();
    const updateMutator = useUpdateTaskMutation();
    const navigator = useNavigate();
    const queryClient = useQueryClient();
    const modal = useModalManageStore();
    const brancies = useTaskBranciesStore();
    const [oldChildrenCache, setOldChildrenCache] = useState<Task[]>([]);
    const nodeTree = useNodeTreeStore();

    useEffect(() => {
        if (query.isLoading || !query.data?.task) return;
        if (_.isEqual(oldChildrenCache, query.data.task.children)) return;
        setOldChildrenCache(_.cloneDeep(query.data.task.children as Task[]));
        brancies.set(taskId, _.cloneDeep(query.data.task.children as Task[]));
    }, [query.isLoading, query.data?.task?.children]);

    const createTaskFn = async () => {
        modal.open('ScreenTransition');
        const task = await createMutator.mutateAsync({
            project_id: projectId,
            task_id: taskId,
            name: 'New Task',
            description: 'This is new Task'
        });
        await queryClient.resetQueries([
            'task',
            { project_id: projectId, id: taskId }
        ]);
        navigator(`/project/${projectId}/${String(task.createTask?.id)}`);
        modal.close();
    };

    const toggleCompleteFn = async (targetTaskId: string) => {
        const data: UpdateTaskMutationVariables = {
            project_id: projectId as string,
            id: targetTaskId as string,
            completed: false
        };
        const task = await updateMutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'task',
            {
                project_id: projectId,
                id: task.updateTask?.parent?.id
            } as TaskQueryVariables
        ]);
    };

    return (
        <div className={`Children ${className}`}>
            <List
                tasks={brancies.get(taskId)}
                projectId={projectId as string}
                parentTaskId={taskId}
                nodeTree={nodeTree.get()}
                toggleCompletedFn={toggleCompleteFn}
                editable={
                    projectQuery.data?.project.grant.operateTask as boolean
                }
            />
            <div className="Children-button">
                <CreateButton
                    onClickFn={createTaskFn}
                    disabled={!projectQuery.data?.project.grant.operateTask}
                />
            </div>
        </div>
    );
}
