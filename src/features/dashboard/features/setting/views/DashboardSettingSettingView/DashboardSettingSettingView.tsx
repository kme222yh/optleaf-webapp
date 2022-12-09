import './DashboardSettingSettingView.scss';

export type DashboardSettingSettingViewProps = {
    className?: string;
};
DashboardSettingSettingView.defaultProps = {
    className: ''
};

export function DashboardSettingSettingView({
    className
}: DashboardSettingSettingViewProps) {
    return (
        <div className={`DashboardSettingSettingView ${className}`}>
            <div className="DashboardSettingSettingView-body">
                <span className="DashboardSettingSettingView-commingsoon">
                    Comming soon ...
                    <br />
                    (´^ω^｀)
                </span>
            </div>
        </div>
    );
}
