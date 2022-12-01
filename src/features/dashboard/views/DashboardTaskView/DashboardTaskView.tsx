import './DashboardTaskView.scss';

import { TaskBrancies } from '../../features/tasks';
import { ProjectChats } from '../../features/chats';
import { ProjectInfo } from '../../features/detail';

export type DashboardTaskViewProps = {
    className?: string;
};
DashboardTaskView.defaultProps = {
    className: ''
};

export function DashboardTaskView({ className }: DashboardTaskViewProps) {
    return (
        <div className={`DashboardTaskView ${className}`}>
            <div className="DashboardTaskView-tasks">
                <TaskBrancies />
            </div>
            <div className="DashboardTaskView-info">
                <div className="DashboardTaskView-detail">
                    <ProjectInfo />
                </div>
                <div className="DashboardTaskView-chats">
                    <ProjectChats />
                </div>
            </div>
        </div>
    );
}
