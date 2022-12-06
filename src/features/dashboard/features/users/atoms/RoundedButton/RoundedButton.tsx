import './RoundedButton.scoped.scss';

export type RoundedButtonProps = {
    className?: string;
    text: string;
    onClick: () => void;
};
RoundedButton.defaultProps = {
    className: ''
};

export function RoundedButton({
    className,
    text,
    onClick
}: RoundedButtonProps) {
    return (
        <button
            className={`RoundedButton ${className}`}
            onClick={onClick}
            type="button"
        >
            {text}
        </button>
    );
}
