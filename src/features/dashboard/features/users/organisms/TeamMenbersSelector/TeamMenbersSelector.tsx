import './TeamMenbersSelector.scoped.scss';

import { useState, useEffect, ReactNode } from 'react';

import { useTeamQuery, User } from '@/graphql/generated';

import { User as UserItem } from '../../atoms/User';

export type TeamMenbersSelectorProps = {
    className?: string;
    id: string;
    selector: (id: number) => void;
    selected: number[];
    excluded?: number[];
};
TeamMenbersSelector.defaultProps = {
    className: '',
    excluded: []
};

export function TeamMenbersSelector({
    className,
    id,
    selector,
    selected,
    excluded
}: TeamMenbersSelectorProps) {
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
            const isSelected = selected!.includes(val.ID);
            const isExcluded = excluded!.includes(val.ID);
            $items.push(
                <li
                    className={`TeamMenbersSelector-item ${
                        isSelected ? 'selected' : ''
                    } ${isExcluded ? 'exclude' : ''}`}
                    key={val.ID}
                    role="row"
                >
                    <UserItem
                        icon={val.icon_image}
                        name={val.name}
                        selected={isSelected}
                        onClick={isExcluded ? () => {} : () => selector(val.ID)}
                    />
                </li>
            );
        });
    });

    return (
        <div className={`TeamMenbersSelector ${className}`}>
            <ul className="TeamMenbersSelector-body">{$items}</ul>
        </div>
    );
}
