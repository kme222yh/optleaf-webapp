import './BigText.scoped.scss';

export type BigTextProps = {
    className?: string;
    children: string;
};
BigText.defaultProps = {
    className: ''
};

export function BigText({ className, children }: BigTextProps) {
    return <p className={`BigText ${className}`}>{children}</p>;
}
