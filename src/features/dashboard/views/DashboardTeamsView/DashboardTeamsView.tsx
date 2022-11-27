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
    const $layout = useElementSize();

    const bodyHeight = $layout.height - $header.height - 60 - 20 - 20;

    return (
        <div className={`DashboardTeamsView ${className}`}>
            <div className="DashboardTeamsView-header" ref={$header.ref}>
                <TeamsHeader />
            </div>
            <div
                className="DashboardTeamsView-body"
                style={{ height: bodyHeight }}
            >
                <TeamsList />
            </div>
        </div>
    );
}
