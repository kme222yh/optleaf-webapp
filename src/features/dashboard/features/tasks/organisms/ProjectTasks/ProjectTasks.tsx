import './ProjectTasks.scoped.scss';

import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';

import {
    ProjectQueryVariables,
    TaskQueryVariables,
    UpdateTaskMutationVariables,
    useUpdateTaskMutation
} from '@/graphql/generated';

import { Root } from '../Root';
import { Branchies } from '../Branchies';
import { useTaskBranciesStore } from '../../stores/taskBrancies';
import { useNodeTreeStore } from '../../stores/nodeTree';

export type ProjectTasksProps = {
    className?: string;
};
ProjectTasks.defaultProps = {
    className: ''
};

export function ProjectTasks({ className }: ProjectTasksProps) {
    const { id: projectId, taskId } = useParams();
    const brancies = useTaskBranciesStore();
    const nodeTree = useNodeTreeStore();
    const mutator = useUpdateTaskMutation();
    const queryClient = useQueryClient();

    const onDragEndFn = async (e: DropResult) => {
        if (!e.destination) return; // 虚無にドロップ
        if (e.destination.droppableId === e.source.droppableId) return; // 同じ階層にドロップ
        if (e.destination.droppableId === e.draggableId) return; // 自分自身の下にドロップ

        // brancies操作
        const source = brancies.get(e.source.droppableId);
        const destination = brancies.get(e.destination.droppableId);
        const mv = source.splice(e.source.index, 1)[0];
        destination.splice(e.destination.index, 0, mv);
        brancies.set(e.source.droppableId, source);
        brancies.set(e.destination.droppableId, destination);

        const data = {
            project_id: projectId,
            id: e.draggableId,
            parent_id:
                e.destination.droppableId === 'project'
                    ? ''
                    : e.destination.droppableId
        } as UpdateTaskMutationVariables;
        await mutator.mutateAsync(data);
        const destinationQueryKey =
            e.destination.droppableId === 'project'
                ? ['project', { id: projectId } as ProjectQueryVariables]
                : [
                      'task',
                      {
                          project_id: projectId,
                          id: e.destination.droppableId
                      } as TaskQueryVariables
                  ];
        const originalQueryKey =
            e.source.droppableId === 'project'
                ? ['project', { id: projectId } as ProjectQueryVariables]
                : [
                      'task',
                      {
                          project_id: projectId,
                          id: e.source.droppableId
                      } as TaskQueryVariables
                  ];
        await queryClient.invalidateQueries(destinationQueryKey);
        await queryClient.invalidateQueries(originalQueryKey);
        await queryClient.invalidateQueries([
            'task',
            {
                project_id: projectId,
                id: e.draggableId
            } as TaskQueryVariables
        ]);
    };

    return (
        <div className={`ProjectTasks ${className}`}>
            <DragDropContext onDragEnd={onDragEndFn}>
                <ul className="ProjectTasks-body">
                    <li
                        className={`ProjectTasks-item ${
                            !taskId || nodeTree.get().length < 2
                                ? 'current'
                                : ''
                        }`}
                    >
                        <Root />
                    </li>
                    <Branchies />
                </ul>
            </DragDropContext>
        </div>
    );
}
