import './UserMenu.scoped.scss';

import { User } from '@/graphql/generated';
import { UserIcon } from '@/features/dashboard/atoms/UserIcon';

export type UserMenuProps = {
    className?: string;
    switchRoleFn: () => void;
    removeMemberFn: () => {};
    user: User;
    role: 'member' | 'admin' | '';
    type: 'project' | 'team';
};
UserMenu.defaultProps = {
    className: ''
};

export function UserMenu({
    className,
    switchRoleFn,
    removeMemberFn,
    user,
    role,
    type
}: UserMenuProps) {
    return (
        <div className={`UserMenu ${className}`}>
            <div className="UserMenu-body">
                <div className="UserMenu-info">
                    <div className="UserMenu-icon">
                        <UserIcon src={user.icon_image} size="40px" />
                    </div>
                    <p className="UserMenu-name">{user.name}</p>
                </div>
                <div className="UserMenu-control">
                    {role === '' ? (
                        ''
                    ) : (
                        <div
                            className={`UserMenu-role ${
                                role === 'admin' ? 'right' : ''
                            }`}
                            onClick={switchRoleFn}
                            onKeyDown={switchRoleFn}
                            role="button"
                            tabIndex={0}
                        >
                            <span className="UserMenu-role-left">Member</span>
                            <span className="UserMenu-role-right">Admin</span>
                        </div>
                    )}
                    <div className="UserMenu-remove">
                        <p className="UserMenu-remove-title">
                            Remove from this {type}
                        </p>
                        <p className="UserMenu-remove-text">
                            This member will be removed. <br />
                            We cannot remove admin.
                        </p>
                        <button
                            className="UserMenu-remove-button"
                            type="button"
                            disabled={role === 'admin'}
                            onClick={removeMemberFn}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
