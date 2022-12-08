import './RoundedButtonDanger.scoped.scss';

export type RoundedButtonDangerProps = {
    className?: string;
    text: string;
    onClick?: () => void;
    disabled?: boolean;
};
RoundedButtonDanger.defaultProps = {
    className: '',
    onClick: () => {},
    disabled: false
};

export function RoundedButtonDanger({
    className,
    text,
    onClick,
    disabled
}: RoundedButtonDangerProps) {
    return (
        <button
            type="submit"
            className={`RoundedButtonDanger ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            <span className="RoundedButton-text">{text}</span>
        </button>
    );
}
