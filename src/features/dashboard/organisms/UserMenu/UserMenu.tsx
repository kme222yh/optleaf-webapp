import './UserMenu.scoped.scss';

import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useRef } from 'react';

import { useAuth } from '@/providers/auth';

import { UserIcon } from '../../atoms/UserIcon';
import { useModalManageStore } from '../../stores/modalManager';

export type UserMenuProps = {
    className?: string;
};
UserMenu.defaultProps = {
    className: ''
};

export function UserMenu({ className }: UserMenuProps) {
    const { user, logout } = useAuth();
    const nodeRef = useRef(null);
    const modal = useModalManageStore();
    const logoutFn = async () => {
        await logout();
    };

    return (
        <div className={`UserMenu ${className}`}>
            <CSSTransition
                nodeRef={nodeRef}
                in={modal.isOpened('userMenu')}
                timeout={300}
                classNames="open"
            >
                <div className="UserMenu-body" ref={nodeRef}>
                    <div
                        className="UserMenu-header"
                        onClick={() => modal.toggle('userMenu')}
                        onKeyDown={() => modal.toggle('userMenu')}
                        role="button"
                        tabIndex={0}
                    >
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
            </CSSTransition>
        </div>
    );
}
