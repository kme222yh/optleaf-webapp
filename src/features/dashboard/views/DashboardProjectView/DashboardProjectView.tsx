import './DashboardProjectView.scss';

import { ProjectTasks } from '../../features/tasks';
import { ProjectChats } from '../../features/chats';
import { ProjectInfo } from '../../features/detail';
import { ProjectTeamMenberList } from '../../features/users';

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
                <ProjectTasks />
            </div>
            <div className="DashboardProjectView-chats">
                <ProjectChats />
            </div>
            <div className="DashboardProjectView-info">
                <div className="DashboardProjectView-detail">
                    <ProjectInfo />
                </div>
                <div className="DashboardProjectView-menbers">
                    <ProjectTeamMenberList />
                </div>
            </div>
        </div>
    );
}
