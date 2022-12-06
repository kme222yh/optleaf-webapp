import './ProjectMenbers.scoped.scss';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useProjectQuery, User } from '@/graphql/generated';

import { User as UserItem } from '../../atoms/User';

export type ProjectMenbersProps = {
    className?: string;
};
ProjectMenbers.defaultProps = {
    className: ''
};

export function ProjectMenbers({ className }: ProjectMenbersProps) {
    const { id } = useParams();
    const query = useProjectQuery({ id: id as string });
    const [owner, setOwner] = useState<User>({
        name: ''
    } as User);
    const [admins, setAdmin] = useState<User[]>([]);
    const [menbers, setMenbers] = useState<User[]>([]);
    const [pendings, setPendings] = useState<User[]>([]);

    useEffect(() => {
        if (!query.isLoading) {
            setOwner(query.data?.project.owner as User);
            setAdmin(query.data?.project.administrators as User[]);
            setMenbers(query.data?.project.menbers as User[]);
            setPendings(query.data?.project.pending as User[]);
        }
    }, [query.isLoading, query.data?.project]);

    const $items = [];
    if (owner.name !== '') {
        $items.push(
            <li className="ProjectMenbers-item" key={owner.ID}>
                <UserItem
                    icon={owner.icon_image}
                    name={owner.name}
                    userRole="owner"
                />
            </li>
        );
    }
    admins.forEach((user) => {
        $items.push(
            <li className="ProjectMenbers-item" key={user.ID}>
                <UserItem
                    icon={user.icon_image}
                    name={user.name}
                    userRole="admin"
                />
            </li>
        );
    });
    menbers.forEach((user) => {
        $items.push(
            <li className="ProjectMenbers-item" key={user.ID}>
                <UserItem icon={user.icon_image} name={user.name} />
            </li>
        );
    });
    pendings.forEach((user) => {
        $items.push(
            <li className="ProjectMenbers-item" key={user.ID}>
                <UserItem
                    icon={user.icon_image}
                    name={user.name}
                    userRole="pending"
                />
            </li>
        );
    });

    return (
        <div className={`ProjectMenbers ${className}`}>
            <ul className="ProjectMenbers-body">{$items}</ul>
        </div>
    );
}
