import '../scss/UserDisplay.scss'

import { storage } from '@/lib/storage'
import { useState } from 'react';
import {CSSTransition} from "react-transition-group";
import { useAuth } from '@/features/auth'
import { Link, useParams } from 'react-router-dom'

import {UserIconImage} from './UserIconImage'


export function UserDisplay() {
    const { user } = useAuth()

    const [isOpen, setUser] = useState<boolean>(false)
    const toggleMenu = () => {
        setUser(!isOpen);
    }

    const logoutFn = () => {
        storage.clearToken();
        window.location.assign(window.location.origin as unknown as string);
    }

    return (
        <div className='UserDisplay' onClick={toggleMenu} role="button" onKeyDown={toggleMenu} tabIndex={0}>
            <UserIconImage imageUrl={user?.icon_image as string} />
            <p className='UserDisplay-name'>{user?.name}</p>

            <CSSTransition
                classNames="nav"
                in={isOpen}
                timeout={0}
                unmountOnExit>
                <nav className='UserDisplayMenu'>
                    <ul className='UserDisplayMenu-body'>
                        <li className='UserDisplayMenu-item'>
                            <Link to="/user/setting">ユーザー設定</Link>
                        </li>
                        <li className='UserDisplayMenu-item'>
                            <button type='button' onClick={logoutFn} onKeyDown={logoutFn}>ログアウト</button>
                        </li>
                    </ul>
                </nav>
            </CSSTransition>

        </div>
    )
}