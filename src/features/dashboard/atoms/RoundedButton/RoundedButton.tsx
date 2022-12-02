import './RoundedButton.scoped.scss';

export type RoundedButtonProps = {
    className?: string;
    text: string;
    collor_reverse?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    // type?: 'submit' | 'reset' | 'button' | undefined;
};
RoundedButton.defaultProps = {
    className: '',
    collor_reverse: false,
    disabled: false,
    onClick: () => {}
    // type: 'button'
};

export function RoundedButton({
    className,
    text,
    collor_reverse,
    disabled,
    onClick
}: // type
RoundedButtonProps) {
    return (
        <button
            type="submit"
            className={`RoundedButton ${className}${
                collor_reverse ? ' collor_reverse' : ''
            }${disabled ? ' disabled' : ''}`}
            onClick={onClick}
        >
            <span className="RoundedButton-text">{text}</span>
        </button>
    );
}
