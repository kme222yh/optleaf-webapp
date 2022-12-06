import './User.scoped.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { UserIcon } from '@/features/dashboard/atoms/UserIcon';

export type UserProps = {
    className?: string;
    icon: string;
    name: string;
    userRole?: 'owner' | 'admin' | '' | 'pending';
    onClick?: () => void;
    selected?: boolean;
};
User.defaultProps = {
    className: '',
    userRole: '',
    onClick: () => {},
    selected: false
};

export function User({
    className,
    icon,
    name,
    userRole,
    onClick,
    selected
}: UserProps) {
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
            {selected ? (
                <p className="User-selected">
                    <FontAwesomeIcon icon={faCheck} />
                </p>
            ) : (
                ''
            )}
        </div>
    );
}
