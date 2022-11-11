import './Text1.scoped.scss';

export type Text1Props = {
    className?: string;
    children: React.ReactNode;
};
Text1.defaultProps = {
    className: ''
};

export function Text1({ className, children }: Text1Props) {
    return <p className={`Text1 ${className}`}>{children}</p>;
}
