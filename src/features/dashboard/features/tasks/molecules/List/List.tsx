import './List.scoped.scss';

import { useParams } from 'react-router-dom';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import type { DroppableProvided, DraggableProvided } from 'react-beautiful-dnd';

import { Task, useTaskQuery } from '@/graphql/generated';

import { Item } from '../Item';

export type ListProps = {
    className?: string;
    tasks: Task[];
    parentTaskId: string;
};
List.defaultProps = {
    className: ''
};

export function List({ className, tasks, parentTaskId }: ListProps) {
    const { id, taskId } = useParams();
    const query = useTaskQuery({
        project_id: id as string,
        id: taskId as string
    });

    // sort completed task to the bottom
    tasks.sort(
        (v1, v2) =>
            (v1.completed as unknown as number) -
            (v2.completed as unknown as number)
    );

    return (
        <Droppable droppableId={parentTaskId}>
            {(provided: DroppableProvided) => (
                <div
                    className={`List ${className}`}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {tasks.map((task, index) => (
                        <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                        >
                            {(pr: DraggableProvided) => (
                                <div
                                    className={`List-item ${
                                        query.data?.task?.tree.includes(task.id)
                                            ? 'current'
                                            : ''
                                    }`}
                                    ref={pr.innerRef}
                                    {...pr.draggableProps}
                                    {...pr.dragHandleProps}
                                >
                                    <Item
                                        hasChild={task.has_child}
                                        text={task.name}
                                        to={`/project/${id}/${String(task.id)}`}
                                        isCompleted={task.completed}
                                        taskId={task.id}
                                    />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}
