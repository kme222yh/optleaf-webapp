import './DashboardTaskView.scss';

import { TaskBrancies } from '../../features/tasks';
import { TaskChats } from '../../features/chats';
import { TaskInfo } from '../../features/detail';

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
                    <TaskInfo />
                </div>
                <div className="DashboardTaskView-chats">
                    <TaskChats />
                </div>
            </div>
        </div>
    );
}