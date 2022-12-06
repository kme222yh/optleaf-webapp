import './Users.scoped.scss';

import { ReactNode } from 'react';

import { User } from '@/graphql/generated';
import { User as UserItem } from '../../atoms/User';

export type UsersProps = {
    className?: string;
    users: User[];
    userRole?: 'owner' | 'admin' | '' | 'pending';
};
Users.defaultProps = {
    className: '',
    userRole: ''
};

export function Users({ className, users, userRole }: UsersProps) {
    const $list: ReactNode[] = [];
    users.forEach((user) => {
        $list.push(
            <li className="Users-item" key={user.ID}>
                <UserItem
                    icon={user.icon_image}
                    name={user.name}
                    userRole={userRole}
                />
            </li>
        );
    });
    return (
        <div className={`Users ${className}`}>
            <ul className="Users-body">{$list}</ul>
        </div>
    );
}
