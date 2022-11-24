import './UserIcon.scoped.scss';

import { useAuth } from '@/providers/auth';

export type UserIconProps = {
    className?: string
};
UserIcon.defaultProps = {
    className: ''
};

export function UserIcon({className}: UserIconProps) {
    const { user } = useAuth();
    const src = user?.icon_image ? user.icon_image : import.meta.env.VITE_DEFAULT_USER_ICON;

    return (
        <div className={`UserIcon ${className}`}>
            <div className="UserIcon-body">
                <img className='UserIcon-img' src={src} alt="user icon" />
            </div>
        </div>
    );
}