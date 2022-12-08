/* eslint-disable jsx-a11y/click-events-have-key-events */
import './TeamMenbersEx.scoped.scss';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useTeamQuery, User } from '@/graphql/generated';
import { useWindowSize } from '@/hooks/useWindowSize';

import { User as UserItem } from '../../atoms/User';
import { TeamUserMenu } from '../TeamUserMenu';

export type TeamMenbersExProps = {
    className?: string;
    id: string;
};
TeamMenbersEx.defaultProps = {
    className: ''
};

export function TeamMenbersEx({ className, id }: TeamMenbersExProps) {
    const window = useWindowSize();
    const nodeRef = useRef(null);
    const [modalPos, setModalPos] = useState({ x: 0, y: 0 });
    const [focusedUserId, setFocusedUserId] = useState(0);
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

    const $items: ReactNode[] = [];
    const menberObj: { [key: string]: User[] } = {
        owner: [owner],
        admin: admins,
        menber: menbers,
        pending: pendings
    };
    Object.keys(menberObj).forEach((key) => {
        menberObj[key].forEach((val) => {
            let role = '' as 'owner' | 'admin' | '' | 'pending';
            switch (key) {
                case 'owner':
                    role = 'owner';
                    break;
                case 'admin':
                    role = 'admin';
                    break;
                case 'pending':
                    role = 'pending';
                    break;
                default:
            }
            const onClickFn = (e: any) => {
                if (key === 'owner') return;
                openUserModal(e);
                setFocusedUserId(val.ID);
            };
            $items.push(
                <li
                    className="TeamMenbersEx-item"
                    key={val.ID}
                    onClick={onClickFn}
                    role="row"
                >
                    <UserItem
                        icon={val.icon_image}
                        name={val.name}
                        userRole={role}
                    />
                </li>
            );
        });
    });

    return (
        <div className={`TeamMenbersEx ${className}`}>
            <ul className="TeamMenbersEx-body">{$items}</ul>
            {query.data?.team.grant.edit ? (
                <CSSTransition
                    nodeRef={nodeRef}
                    in={focusedUserId !== 0}
                    timeout={300}
                    classNames="fade"
                >
                    <div
                        className="TeamMenbersEx-userinfo"
                        onPointerLeave={closeUserModal}
                        style={{ top: modalPos.y, left: modalPos.x }}
                        ref={nodeRef}
                    >
                        <TeamUserMenu userId={focusedUserId} />
                    </div>
                </CSSTransition>
            ) : (
                ''
            )}
        </div>
    );
}
