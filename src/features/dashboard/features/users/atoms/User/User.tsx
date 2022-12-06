import './User.scoped.scss';

import { UserIcon } from '@/features/dashboard/atoms/UserIcon';

export type UserProps = {
    className?: string;
    icon: string;
    name: string;
    userRole?: 'owner' | 'admin' | '' | 'pending';
    onClick?: () => void;
};
User.defaultProps = {
    className: '',
    userRole: '',
    onClick: () => {}
};

export function User({ className, icon, name, userRole, onClick }: UserProps) {
    return (
        <div
            className={`User ${className}`}
            onClick={onClick}
            onKeyPress={onClick}
            role="button"
            tabIndex={0}
        >
            <div className="User-icon">
                <UserIcon src={icon} size="40px" />
            </div>
            <p className="User-name">{name}</p>
            {userRole === '' ? '' : <p className="User-role">{userRole}</p>}
        </div>
    );
}
