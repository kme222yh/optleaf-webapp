import './OperationPanel.scoped.scss';

import { RectButton } from '../../atoms/RectButton';

export type OperationPanelProps = {
    className?: string;
    title: string;
    content: string;
    button: string;
    onClick: () => void;
    warning?: boolean;
};
OperationPanel.defaultProps = {
    className: '',
    warning: false
};

export function OperationPanel({
    className,
    title,
    content,
    button,
    onClick,
    warning
}: OperationPanelProps) {
    return (
        <div className={`OperationPanel ${className}`}>
            <div className="OperationPanel-left">
                <p className="OperationPanel-title">{title}</p>
                <p className="OperationPanel-content">{content}</p>
            </div>
            <div className="OperationPanel-right">
                <RectButton
                    text={button}
                    onClick={onClick}
                    type={warning ? 'warning' : 'default'}
                />
            </div>
        </div>
    );
}
