import './RoundedButton.scoped.scss';

export type RoundedButtonProps = {
    className?: string;
    text: string;
    onClick?: () => void;
};
RoundedButton.defaultProps = {
    className: '',
    onClick: () => {}
};

export function RoundedButton({
    className,
    text,
    onClick
}: RoundedButtonProps) {
    return (
        <button
            type="submit"
            className={`RoundedButton ${className}`}
            onClick={onClick}
        >
            <span className="RoundedButton-text">{text}</span>
        </button>
    );
}
