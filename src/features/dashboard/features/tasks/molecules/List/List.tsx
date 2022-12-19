import './List.scoped.scss';

import { Droppable } from 'react-beautiful-dnd';

import { Task } from '@/graphql/generated';

import { Item } from '../Item';

export type ListProps = {
    className?: string;
    tasks: Task[];
    nodeTree: string[];
    parentTaskId: string;
    projectId: string;
    toggleCompletedFn: (taskId: string) => void;
    editable?: boolean;
};
List.defaultProps = {
    className: '',
    editable: false
};

export function List({
    className,
    tasks,
    nodeTree,
    parentTaskId,
    projectId,
    editable,
    toggleCompletedFn
}: ListProps) {
    // sort completed task to the bottom
    tasks.sort(
        (v1, v2) =>
            (v1.completed as unknown as number) -
            (v2.completed as unknown as number)
    );
    return (
        <Droppable droppableId={parentTaskId}>
            {(provided) => (
                <div
                    className={`List ${className}`}
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {tasks.map((task, index) => (
                        <Item
                            projectId={projectId}
                            task={task}
                            index={index}
                            editable={editable}
                            toggleCompletedFn={() => toggleCompletedFn(task.id)}
                            selected={nodeTree.includes(task.id)}
                            key={task.id}
                        />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}
