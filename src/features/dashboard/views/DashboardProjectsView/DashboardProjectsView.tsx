import './DashboardProjectsView.scss';

import { useElementSize } from '@/hooks/useElementSize';

import { ProjectList } from '../../organisms/ProjectList';
import { ProjectsHeader } from '../../organisms/ProjectsHeader';

export type DashboardProjectsViewProps = {
    className?: string;
};
DashboardProjectsView.defaultProps = {
    className: ''
};

export function DashboardProjectsView({
    className
}: DashboardProjectsViewProps) {
    const $header = useElementSize();

    return (
        <div className={`DashboardProjectsView ${className}`}>
            <div className="DashboardProjectsView-header" ref={$header.ref}>
                <ProjectsHeader />
            </div>
            <div
                className="DashboardProjectsView-body"
                style={{ height: `calc(100% - 60px - ${$header.height}px)` }}
            >
                <ProjectList />
            </div>
        </div>
    );
}
