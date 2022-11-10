import './index.scss';

export type RoundedButtonProps = {
    text: string;
    collor_reverse?: boolean;
    disabled?: boolean;
};
RoundedButton.defaultProps = {
    collor_reverse: false,
    disabled: false
};

export function RoundedButton({
    text,
    collor_reverse,
    disabled
}: RoundedButtonProps) {
    return (
        <button
            type="button"
            className={`RoundedButton${
                collor_reverse ? ' collor_reverse' : ''
            }${disabled ? ' disabled' : ''}`}
        >
            <span className="RoundedButton-text">{text}</span>
        </button>
    );
}
