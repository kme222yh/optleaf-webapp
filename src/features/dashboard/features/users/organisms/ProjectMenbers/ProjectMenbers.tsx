/* eslint-disable jsx-a11y/click-events-have-key-events */
import './ProjectMenbers.scoped.scss';

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { useProjectQuery, User } from '@/graphql/generated';
import { useWindowSize } from '@/hooks/useWindowSize';

import { User as UserItem } from '../../atoms/User';
import { ProjectUserMenu } from '../ProjectUserMenu';

export type ProjectMenbersProps = {
    className?: string;
};
ProjectMenbers.defaultProps = {
    className: ''
};

export function ProjectMenbers({ className }: ProjectMenbersProps) {
    const window = useWindowSize();
    const nodeRef = useRef(null);
    const { id } = useParams();
    const query = useProjectQuery({ id: id as string });
    const [owner, setOwner] = useState<User>({
        name: ''
    } as User);
    const [modalPos, setModalPos] = useState({ x: 0, y: 0 });
    const [focusedUserId, setFocusedUserId] = useState(0);
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

    const openUserModal = (e: any) => {
        const pos = { x: e.clientX, y: e.clientY - 10 };
        if (window[1] < pos.y + 245) {
            pos.y = window[1] - 245 - 10;
        }
        setModalPos(pos);
    };
    const closeUserModal = () => {
        setFocusedUserId(0);
    };

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
            <li
                className="ProjectMenbers-item"
                key={user.ID}
                onClick={(e) => {
                    openUserModal(e);
                    setFocusedUserId(user.ID);
                }}
                role="row"
            >
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
            <li
                className="ProjectMenbers-item"
                key={user.ID}
                onClick={(e) => {
                    openUserModal(e);
                    setFocusedUserId(user.ID);
                }}
                role="row"
            >
                <UserItem icon={user.icon_image} name={user.name} />
            </li>
        );
    });
    pendings.forEach((user) => {
        $items.push(
            <li
                className="ProjectMenbers-item"
                key={user.ID}
                onClick={(e) => {
                    openUserModal(e);
                    setFocusedUserId(user.ID);
                }}
                role="row"
            >
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
            <CSSTransition
                nodeRef={nodeRef}
                in={focusedUserId !== 0}
                timeout={300}
                classNames="fade"
            >
                <div
                    className="ProjectMenbers-userinfo"
                    onPointerLeave={closeUserModal}
                    style={{ top: modalPos.y, left: modalPos.x }}
                    ref={nodeRef}
                >
                    <ProjectUserMenu userId={focusedUserId} />
                </div>
            </CSSTransition>
        </div>
    );
}
