import './DashboardWhiteAreaAtom.scss';

export type DashboardWhiteAreaAtomProps = {
    className?: string;
    children: React.ReactNode;
};
DashboardWhiteAreaAtom.defaultProps = {
    className: ''
};

export function DashboardWhiteAreaAtom({className, children}: DashboardWhiteAreaAtomProps) {
    return (
        <div className={`DashboardWhiteAreaAtom ${className}`}>
            {children}
        </div>
    );
}