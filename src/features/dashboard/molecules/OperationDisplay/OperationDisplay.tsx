import './OperationDisplay.scoped.scss';

import { RectButton } from '../../atoms/RectButton';

export type OperationDisplayProps = {
    className?: string;
    title: string;
    content: string;
    button: string;
    onClick: () => void;
    warning?: boolean;
};
OperationDisplay.defaultProps = {
    className: '',
    warning: false
};

export function OperationDisplay({
    className,
    title,
    content,
    button,
    onClick,
    warning
}: OperationDisplayProps) {
    return (
        <div className={`OperationDisplay ${className}`}>
            <div className="OperationDisplay-left">
                <p className="OperationDisplay-title">{title}</p>
                <p className="OperationDisplay-content">{content}</p>
            </div>
            <div className="OperationDisplay-right">
                <RectButton
                    text={button}
                    onClick={onClick}
                    type={warning ? 'warning' : 'default'}
                />
            </div>
        </div>
    );
}
