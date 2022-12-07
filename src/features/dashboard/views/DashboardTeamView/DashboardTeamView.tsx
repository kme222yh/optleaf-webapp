import './DashboardTeamView.scss';

import { TeamMembersList } from '../../features/users';
import { TeamInfo } from '../../features/detail';

export type DashboardTeamViewProps = {
    className?: string;
};
DashboardTeamView.defaultProps = {
    className: ''
};

export function DashboardTeamView({ className }: DashboardTeamViewProps) {
    return (
        <div className={`DashboardTeamView ${className}`}>
            <div className="DashboardTeamView-members">
                <TeamMembersList />
            </div>
            <div className="DashboardTeamView-info">
                <TeamInfo />
            </div>
        </div>
    );
}
