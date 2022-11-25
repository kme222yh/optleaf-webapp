import './DashboardTopView.scss';

import { useAuth } from '@/providers/auth';
import { useElementSize } from '@/hooks/useElementSize';

import { Greeting } from '../../molecules/Greeting';
import { ProjectListSM } from '../../organisms/ProjectListSM';
import { TeamListSM } from '../../organisms/TeamListSM';

export type DashboardTopViewProps = {
    className?: string;
};
DashboardTopView.defaultProps = {
    className: ''
};

export function DashboardTopView({ className }: DashboardTopViewProps) {
    const { user } = useAuth();
    const {height, ref } = useElementSize();

    return (
        <div className={`DashboardTopView ${className}`}>
            <div className="DashboardTopView-body" ref={ref}>
                <div className="DashboardTopView-left">
                    <ProjectListSM height={`${(height / 5) * 3 - 12.5}px`} />
                    <TeamListSM height='auto' />
                </div>

                <div className="DashboardTopView-right">
                    <Greeting userName={user?.name as string} />
                    <div className="DashboardTopView-commingsoon">
                        <p>
                            Comming soon ...
                            <br />
                            (´^ω^｀)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
