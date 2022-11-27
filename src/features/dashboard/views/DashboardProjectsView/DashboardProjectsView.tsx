import './DashboardProjectsView.scss';

export type DashboardProjectsViewProps = {
    className?: string;
};
DashboardProjectsView.defaultProps = {
    className: ''
};

export function DashboardProjectsView({
    className
}: DashboardProjectsViewProps) {
    return (
        <div className={`DashboardProjectsView ${className}`}>
            This is DashboardProjectsView component.
        </div>
    );
}
