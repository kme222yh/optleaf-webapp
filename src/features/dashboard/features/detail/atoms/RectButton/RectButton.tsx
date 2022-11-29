import './RectButton.scoped.scss';

export type RectButtonProps = {
    className?: string;
    onClick?: () => void;
    text: string;
    type?: 'default' | 'warning';
};
RectButton.defaultProps = {
    className: '',
    onClick: () => {},
    type: 'default'
};

export function RectButton({
    className,
    onClick,
    text,
    type
}: RectButtonProps) {
    return (
        <button
            className={`RectButton ${className} ${type}`}
            type="button"
            onClick={onClick}
        >
            {text}
        </button>
    );
}
