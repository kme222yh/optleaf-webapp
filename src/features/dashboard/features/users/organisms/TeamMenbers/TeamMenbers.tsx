import './TeamMenbers.scoped.scss';

import { useState, useEffect } from 'react';

import { useTeamQuery, User } from '@/graphql/generated';

import { User as UserItem } from '../../atoms/User';

export type TeamMenbersProps = {
    className?: string;
    id: string;
    omit?: boolean;
};
TeamMenbers.defaultProps = {
    className: '',
    omit: false
};

export function TeamMenbers({ className, id, omit }: TeamMenbersProps) {
    const query = useTeamQuery({ id });
    const [owner, setOwner] = useState<User>({
        name: ''
    } as User);
    const [admins, setAdmin] = useState<User[]>([]);
    const [menbers, setMenbers] = useState<User[]>([]);
    const [pendings, setPendings] = useState<User[]>([]);

    useEffect(() => {
        if (!query.isLoading) {
            setOwner(query.data?.team.owner as User);
            setAdmin(query.data?.team.administrators as User[]);
            setMenbers(query.data?.team.menbers as User[]);
            setPendings(query.data?.team.pending as User[]);
        }
    }, [query.isLoading, query.data?.team]);

    const $items = [];
    if (owner.name !== '') {
        $items.push(
            <li className="TeamMenbers-item" key={owner.ID}>
                <UserItem
                    icon={owner.icon_image}
                    name={owner.name}
                    userRole={omit ? '' : 'owner'}
                />
            </li>
        );
    }
    admins.forEach((user) => {
        $items.push(
            <li className="TeamMenbers-item" key={user.ID}>
                <UserItem
                    icon={user.icon_image}
                    name={user.name}
                    userRole={omit ? '' : 'admin'}
                />
            </li>
        );
    });
    menbers.forEach((user) => {
        $items.push(
            <li className="TeamMenbers-item" key={user.ID}>
                <UserItem icon={user.icon_image} name={user.name} />
            </li>
        );
    });
    pendings.forEach((user) => {
        $items.push(
            <li className="TeamMenbers-item" key={user.ID}>
                <UserItem
                    icon={user.icon_image}
                    name={user.name}
                    userRole={omit ? '' : 'pending'}
                />
            </li>
        );
    });

    return (
        <div className={`TeamMenbers ${className}`}>
            <ul className="TeamMenbers-body">{$items}</ul>
        </div>
    );
}
