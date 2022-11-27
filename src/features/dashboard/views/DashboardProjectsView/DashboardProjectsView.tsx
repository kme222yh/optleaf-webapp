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
    const $layout = useElementSize();

    const bodyHeight = $layout.height - $header.height - 60 - 20 - 20;

    return (
        <div className={`DashboardProjectsView ${className}`} ref={$layout.ref}>
            <div className="DashboardProjectsView-header" ref={$header.ref}>
                <ProjectsHeader />
            </div>
            <div
                className="DashboardProjectsView-body"
                style={{ height: bodyHeight }}
            >
                <ProjectList />
            </div>
        </div>
    );
}
