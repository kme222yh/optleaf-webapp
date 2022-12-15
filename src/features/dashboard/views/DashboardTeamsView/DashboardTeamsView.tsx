import './DashboardTeamsView.scss';

import { useElementSize } from '@/hooks/useElementSize';

import { TeamsList } from '../../organisms/TeamsList';
import { TeamsHeader } from '../../organisms/TeamsHeader';

export type DashboardTeamsViewProps = {
    className?: string;
};
DashboardTeamsView.defaultProps = {
    className: ''
};

export function DashboardTeamsView({ className }: DashboardTeamsViewProps) {
    const $header = useElementSize();

    return (
        <div className={`DashboardTeamsView ${className}`}>
            <div className="DashboardTeamsView-header" ref={$header.ref}>
                <TeamsHeader />
            </div>
            <div
                className="DashboardTeamsView-body"
                style={{ height: `calc(100% - 60px - ${$header.height}px)` }}
            >
                <TeamsList />
            </div>
        </div>
    );
}
