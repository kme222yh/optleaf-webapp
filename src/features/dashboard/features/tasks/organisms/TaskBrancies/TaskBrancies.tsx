import './TaskBrancies.scoped.scss';

import { useEffect, useState, ReactNode, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import type { DropResult } from 'react-beautiful-dnd';
import { useQueryClient } from 'react-query';

import {
    useTaskQuery,
    useUpdateTaskMutation,
    UpdateTaskMutationVariables,
    ProjectQueryVariables,
    TaskQueryVariables
} from '@/graphql/generated';

import { RootTasks } from '../RootTasks';
import { TaskChildren } from '../TaskChildren';
import { useTaskBranciesStore } from '../../stores/taskBrancies';

export type TaskBranciesProps = {
    className?: string;
};
TaskBrancies.defaultProps = {
    className: ''
};

export function TaskBrancies({ className }: TaskBranciesProps) {
    const { id, taskId } = useParams();
    const query = useTaskQuery({
        project_id: id as string,
        id: taskId as string
    });
    const mutator = useUpdateTaskMutation();
    const queryClient = useQueryClient();
    const brancies = useTaskBranciesStore();

    const $endOfListRef = useRef(null);
    const [taskIdTree, setTaskIdTree] = useState([] as string[]);
    useEffect(() => {
        if (!query.isLoading) {
            setTaskIdTree(query.data?.task?.tree as string[]);
            if ($endOfListRef.current) {
                /* @ts-ignore */
                $endOfListRef.current.scrollIntoView(200);
            }
        }
    }, [query.data?.task?.tree, query.isLoading]);

    const $brancies: ReactNode[] = [];
    if (taskId) {
        taskIdTree.forEach((val, idx, arr) => {
            $brancies.push(
                <li
                    key={val}
                    ref={idx === arr.length - 1 ? $endOfListRef : null}
                    className={`TaskBrancies-item ${
                        idx === arr.length - 2 ? 'current' : ''
                    }`}
                >
                    <TaskChildren projectId={id as string} taskId={val} />
                </li>
            );
        });
    }

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
            project_id: id,
            id: e.draggableId,
            parent_id:
                e.destination.droppableId === 'project'
                    ? ''
                    : e.destination.droppableId
        } as UpdateTaskMutationVariables;
        await mutator.mutateAsync(data);
        const destinationQueryKey =
            e.destination.droppableId === 'project'
                ? ['project', { id } as ProjectQueryVariables]
                : [
                      'task',
                      {
                          project_id: id,
                          id: e.destination.droppableId
                      } as TaskQueryVariables
                  ];
        const originalQueryKey =
            e.source.droppableId === 'project'
                ? ['project', { id } as ProjectQueryVariables]
                : [
                      'task',
                      {
                          project_id: id,
                          id: e.source.droppableId
                      } as TaskQueryVariables
                  ];
        await queryClient.invalidateQueries(destinationQueryKey);
        await queryClient.invalidateQueries(originalQueryKey);
        await queryClient.invalidateQueries([
            'task',
            {
                project_id: id,
                id: e.draggableId
            } as TaskQueryVariables
        ]);
    };

    return (
        <div className={`TaskBrancies ${className}`}>
            <DragDropContext onDragEnd={onDragEndFn}>
                <ul className="TaskBrancies-body">
                    <li
                        className={`TaskBrancies-item ${
                            $brancies.length <= 1 ? 'current' : ''
                        }`}
                    >
                        <RootTasks />
                    </li>
                    {$brancies}
                </ul>
            </DragDropContext>
        </div>
    );
}
