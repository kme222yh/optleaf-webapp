import './RoundedButton.scoped.scss';

export type RoundedButtonProps = {
    className?: string;
    text: string;
    collor_reverse?: boolean;
    disabled?: boolean;
};
RoundedButton.defaultProps = {
    className: '',
    collor_reverse: false,
    disabled: false
};

export function RoundedButton({
    className,
    text,
    collor_reverse,
    disabled
}: RoundedButtonProps) {
    return (
        <button
            type="button"
            className={`RoundedButton ${className}${
                collor_reverse ? ' collor_reverse' : ''
            }${disabled ? ' disabled' : ''}`}
        >
            <span className="RoundedButton-text">{text}</span>
        </button>
    );
}
