import './FormArea.scoped.scss';

export type FormAreaProps = {
    className?: string;
    children: React.ReactNode;
    action: string;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
};
FormArea.defaultProps = {
    className: ''
};

export function FormArea({
    className,
    children,
    action,
    onSubmit
}: FormAreaProps) {
    return (
        <div className={`FormArea ${className}`}>
            <form action={action} onSubmit={onSubmit} className="FormArea-body">
                {children}
            </form>
        </div>
    );
}
