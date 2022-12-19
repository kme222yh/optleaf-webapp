import './Item.scoped.scss';

import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import { Task } from '@/graphql/generated';

import { ChildIndicator } from '../../atoms/ChildIndicator';
import { LeafButton } from '../../atoms/LeafButton';

export type ItemProps = {
    className?: string;
    projectId: string;
    task: Task;
    index: number;
    editable?: boolean;
    selected?: boolean;
    toggleCompletedFn?: () => void;
};
Item.defaultProps = {
    className: '',
    editable: false,
    selected: false,
    toggleCompletedFn: () => {}
};

export function Item({
    className,
    projectId,
    task,
    index,
    editable,
    selected,
    toggleCompletedFn
}: ItemProps) {
    return (
        <Draggable
            key={task.id}
            draggableId={task.id}
            index={index}
            isDragDisabled={!editable}
        >
            {(provided, snapshot) => (
                <div
                    className={`Item ${className} ${
                        task.completed ? 'completed' : ''
                    } ${selected ? 'selected' : ''} ${
                        snapshot.isDragging ? 'dragging' : ''
                    }`}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <LeafButton
                        disabled={!editable}
                        fill={task.completed}
                        onClickFn={toggleCompletedFn!}
                    />
                    <Link
                        className="Item-link"
                        to={`/project/${projectId}/${task.id}`}
                    >
                        <span className="Item-text">{task.name}</span>
                        <ChildIndicator visible={task.has_child} />
                    </Link>
                </div>
            )}
        </Draggable>
    );
}
