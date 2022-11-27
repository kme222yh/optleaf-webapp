import './RoundedButton.scoped.scss';

export type RoundedButtonProps = {
    className?: string;
    text: string;
    collor_reverse?: boolean;
    disabled?: boolean;
    // type?: 'submit' | 'reset' | 'button' | undefined;
};
RoundedButton.defaultProps = {
    className: '',
    collor_reverse: false,
    disabled: false
    // type: 'button'
};

export function RoundedButton({
    className,
    text,
    collor_reverse,
    disabled
}: // type
RoundedButtonProps) {
    return (
        <button
            type="submit"
            className={`RoundedButton ${className}${
                collor_reverse ? ' collor_reverse' : ''
            }${disabled ? ' disabled' : ''}`}
        >
            <span className="RoundedButton-text">{text}</span>
        </button>
    );
}
