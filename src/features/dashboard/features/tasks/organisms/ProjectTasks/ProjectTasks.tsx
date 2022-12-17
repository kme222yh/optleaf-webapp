import './ProjectTasks.scoped.scss';

import { DragDropContext } from 'react-beautiful-dnd';

import { RootTasks } from '../RootTasks';

export type ProjectTasksProps = {
    className?: string;
};
ProjectTasks.defaultProps = {
    className: ''
};

export function ProjectTasks({ className }: ProjectTasksProps) {
    return (
        <div className={`ProjectTasks ${className}`}>
            <DragDropContext onDragEnd={() => {}}>
                <ul className="ProjectTasks-body">
                    <li className="ProjectTasks-item current">
                        <RootTasks />
                    </li>
                </ul>
            </DragDropContext>
        </div>
    );
}
