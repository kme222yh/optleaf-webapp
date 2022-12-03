import './ProjectTasks.scoped.scss';

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
            <ul className="ProjectTasks-body">
                <li className="ProjectTasks-item current">
                    <RootTasks />
                </li>
            </ul>
        </div>
    );
}
