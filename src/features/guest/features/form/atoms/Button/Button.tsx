import './Button.scoped.scss';

export type ButtonProps = {
    className?: string;
    text: string;
    collor_reverse?: boolean;
    disabled?: boolean;
};
Button.defaultProps = {
    className: '',
    collor_reverse: false,
    disabled: false
};

export function Button({
    className,
    text,
    collor_reverse,
    disabled
}: ButtonProps) {
    return (
        <button
            type="submit"
            className={`Button ${className}${
                collor_reverse ? ' collor_reverse' : ''
            }${disabled ? ' disabled' : ''}`}
        >
            <span className="RoundedButton-text">{text}</span>
        </button>
    );
}
