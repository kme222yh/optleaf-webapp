import './Chat.scoped.scss';

import { formatDateTime } from '@/lib/date';
import { UserIcon } from '@/features/dashboard/atoms/UserIcon';

export type ChatProps = {
    className?: string;
    icon: string;
    name: string;
    content: string;
    date: string;
    omit?: boolean;
};
Chat.defaultProps = {
    className: '',
    omit: false
};

export function Chat({
    className,
    icon,
    name,
    content,
    date,
    omit
}: ChatProps) {
    return (
        <div className={`Chat ${className}`}>
            {omit ? (
                <div style={{ width: '40px' }} />
            ) : (
                <UserIcon src={icon} size="40px" />
            )}
            <div className="Chat-body">
                <p className="Chat-name">{name}</p>
                <p className="Chat-content">{content}</p>
            </div>
            <span className="Chat-date">
                {formatDateTime(date ?? '1912-12-3')}
            </span>
        </div>
    );
}
