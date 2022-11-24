import './DashboardWhiteWrapperAtom.scss';

export type DashboardWhiteWrapperAtomProps = {
    className?: string;
    children: React.ReactNode;
};
DashboardWhiteWrapperAtom.defaultProps = {
    className: ''
};

export function DashboardWhiteWrapperAtom({
    className,
    children
}: DashboardWhiteWrapperAtomProps) {
    return (
        <div className={`DashboardWhiteWrapperAtom ${className}`}>
            {children}
        </div>
    );
}
