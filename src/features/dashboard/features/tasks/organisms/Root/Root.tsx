import './Root.scoped.scss';

import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    useProjectQuery,
    useCreateTaskMutation,
    Task,
    UpdateTaskMutationVariables,
    useUpdateTaskMutation,
    ProjectQueryVariables
} from '@/graphql/generated';

import { List } from '../../molecules/List';
import { CreateButton } from '../../atoms/CreateButton';
import { useModalManageStore } from '../../../../stores/modalManager';
import { useTaskBranciesStore } from '../../stores/taskBrancies';

export type RootProps = {
    className?: string;
};
Root.defaultProps = {
    className: ''
};

export function Root({ className }: RootProps) {
    const { id: projectId, taskId } = useParams();
    const query = useProjectQuery({ id: projectId as string });
    const createMutator = useCreateTaskMutation();
    const updateMutator = useUpdateTaskMutation();
    const navigator = useNavigate();
    const queryClient = useQueryClient();
    const modal = useModalManageStore();
    const brancies = useTaskBranciesStore();
    const [oldChildrenCache, setOldChildrenCache] = useState<Task[]>([]);

    useEffect(() => {
        if (query.isLoading || !query.data?.project) return;
        if (_.isEqual(oldChildrenCache, query.data.project.tasks)) return;
        setOldChildrenCache(_.cloneDeep(query.data.project.tasks as Task[]));
        brancies.set(
            'project',
            _.cloneDeep(query.data.project.tasks as Task[])
        );
    }, [query.isLoading, query.data?.project?.tasks]);

    const createTask = async () => {
        modal.open('ScreenTransition');
        const task = await createMutator.mutateAsync({
            project_id: projectId as string,
            name: 'New Task',
            description: 'This is new Task'
        });
        await queryClient.resetQueries(['project', { projectId }]);
        navigator(
            `/project/${projectId as string}/${String(task.createTask?.id)}`
        );
        modal.close();
    };

    const toggleCompleteFn = async (targetTaskId: string) => {
        const data: UpdateTaskMutationVariables = {
            project_id: projectId as string,
            id: targetTaskId as string,
            completed: false
        };
        await updateMutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'project',
            { id: projectId } as ProjectQueryVariables
        ]);
    };

    return (
        <div className={`Root ${className}`}>
            <List
                tasks={brancies.get('project')}
                projectId={projectId as string}
                parentTaskId="project"
                nodeTree={[]}
                toggleCompletedFn={toggleCompleteFn}
                editable={
                    (query.data?.project.grant.operateTask && taskId) as boolean
                }
            />
            <div className="Root-button">
                <CreateButton
                    onClickFn={createTask}
                    disabled={!query.data?.project.grant.operateTask}
                />
            </div>
        </div>
    );
}
