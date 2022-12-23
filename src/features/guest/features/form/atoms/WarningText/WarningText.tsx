import './WarningText.scoped.scss';

export type WarningTextProps = {
    className?: string;
    children: React.ReactNode;
};
WarningText.defaultProps = {
    className: ''
};

export function WarningText({ className, children }: WarningTextProps) {
    return <p className={`WarningText ${className}`}>{children}</p>;
}
