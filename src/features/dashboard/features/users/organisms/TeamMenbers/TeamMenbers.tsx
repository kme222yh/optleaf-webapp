/* eslint-disable jsx-a11y/click-events-have-key-events */
import './TeamMenbers.scoped.scss';

import { useState, useEffect, ReactNode } from 'react';

import { useTeamQuery, User } from '@/graphql/generated';

import { User as UserItem } from '../../atoms/User';

export type TeamMenbersProps = {
    className?: string;
    id: string;
};
TeamMenbers.defaultProps = {
    className: ''
};

export function TeamMenbers({ className, id }: TeamMenbersProps) {
    const query = useTeamQuery({ id });
    const [owner, setOwner] = useState<User>({
        ID: 0,
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

    const $items: ReactNode[] = [];
    const menberObj: { [key: string]: User[] } = {
        owner: [owner],
        admin: admins,
        menber: menbers,
        pending: pendings
    };
    Object.keys(menberObj).forEach((key) => {
        menberObj[key].forEach((val) => {
            $items.push(
                <li className="TeamMenbers-item" key={val.ID}>
                    <UserItem icon={val.icon_image} name={val.name} />
                </li>
            );
        });
    });

    return (
        <div className={`TeamMenbers ${className}`}>
            <ul className="TeamMenbers-body">{$items}</ul>
        </div>
    );
}
