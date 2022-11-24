import './UserMenu.scoped.scss';

import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import { useAuth } from '@/providers/auth';

import { UserIcon } from '../../atoms/UserIcon';

export type UserMenuProps = {
    className?: string;
    isOpened: boolean;
};
UserMenu.defaultProps = {
    className: ''
};

export function UserMenu({ className, isOpened }: UserMenuProps) {
    const { user, logout } = useAuth();
    // const nodeRef = useRef(null);
    const logoutFn = async () => {
        await logout();
    };

    // const { user } = useAuth();
    // const src = user?.icon_image ? user.icon_image : import.meta.env.VITE_DEFAULT_USER_ICON;

    return (
        <div className={`UserMenu ${className}`}>
            {isOpened}
            <div className="UserMenu-body">
                <div className="UserMenu-header">
                    <UserIcon src={user?.icon_image} />
                    <span className="UserMenu-name">{user?.name}</span>
                </div>
                <ul className="UserMenu-menu">
                    <li className="UserMenu-link">
                        <Link to="/profile">profile</Link>
                    </li>
                    <li className="UserMenu-link">
                        <Link to="/setting">setting</Link>
                    </li>

                    <li className="UserMenu-logout">
                        <button
                            type="button"
                            onClick={logoutFn}
                            onKeyDown={logoutFn}
                        >
                            logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
