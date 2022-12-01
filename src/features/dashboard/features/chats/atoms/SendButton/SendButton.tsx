import './SendButton.scoped.scss';

export type SendButtonProps = {
    className?: string;
    onClick: () => void;
    disabled?: boolean;
};
SendButton.defaultProps = {
    className: '',
    disabled: false
};

export function SendButton({ className, onClick, disabled }: SendButtonProps) {
    return (
        <button
            className={`SendButton ${className}`}
            onClick={onClick}
            type="submit"
            disabled={disabled}
        >
            send
        </button>
    );
}
