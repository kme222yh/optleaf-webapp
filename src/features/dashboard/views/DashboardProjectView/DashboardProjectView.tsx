import './DashboardProjectView.scss';

import { TaskBrancies } from '../../features/tasks';
import { ProjectChats } from '../../features/chats';
import { ProjectInfo } from '../../features/detail';

export type DashboardProjectViewProps = {
    className?: string;
};
DashboardProjectView.defaultProps = {
    className: ''
};

export function DashboardProjectView({ className }: DashboardProjectViewProps) {
    return (
        <div className={`DashboardProjectView ${className}`}>
            <div className="DashboardProjectView-tasks">
                <TaskBrancies />
            </div>
            <div className="DashboardProjectView-chats">
                <ProjectChats />
            </div>
            <div className="DashboardProjectView-info">
                <div className="DashboardProjectView-detail">
                    <ProjectInfo />
                </div>
            </div>
        </div>
    );
}
