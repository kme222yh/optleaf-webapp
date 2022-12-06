import './Team.scoped.scss';

export type TeamProps = {
    className?: string;
    name: string;
    onClick?: () => void;
};
Team.defaultProps = {
    className: '',
    onClick: () => {}
};

export function Team({ className, name, onClick }: TeamProps) {
    return (
        <div
            className={`Team ${className}`}
            onClick={onClick}
            onKeyPress={onClick}
            role="button"
            tabIndex={0}
        >
            <p className="Team-name">{name}</p>
        </div>
    );
}
