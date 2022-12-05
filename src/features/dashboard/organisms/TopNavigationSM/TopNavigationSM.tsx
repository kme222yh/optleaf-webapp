import './TopNavigationSM.scoped.scss';

import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faUser } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

import { useElementSize } from '@/hooks/useElementSize';
import { useModalManageStore } from '../../stores/modalManager';

import { NavLink } from '../../atoms/NavLink';
import { Logo } from '../../svg/Logo';

export type TopNavigationSMProps = {
    className?: string;
};
TopNavigationSM.defaultProps = {
    className: ''
};

export function TopNavigationSM({ className }: TopNavigationSMProps) {
    const nodeRef = useRef(null);
    const modal = useModalManageStore();

    const $header = useElementSize();
    const $nav = useElementSize();
    const layoutHeight = $header.height + $nav.height;
    const layoutWidth = $header.width > $nav.width ? $header.width : $nav.width;

    return (
        <div className={`TopNavigationSM ${className}`}>
            <CSSTransition
                nodeRef={nodeRef}
                in={modal.isClosed('TopMenu')}
                timeout={300}
                classNames="close"
                appear
            >
                <div
                    className="TopNavigationSM-body"
                    ref={nodeRef}
                    style={{ height: layoutHeight, width: layoutWidth }}
                >
                    <div className="TopNavigationSM-header" ref={$header.ref}>
                        <button
                            className={`TopNavigationSM-humburger ${
                                modal.isOpened('TopMenu') ? 'close' : ''
                            }`}
                            type="button"
                            onClick={() => modal.toggle('TopMenu')}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                        <Link
                            className="TopNavigationSM-logo"
                            to="/"
                            onClick={() => modal.close()}
                            onKeyDown={() => modal.close()}
                            role="menuitem"
                        >
                            <Logo />
                        </Link>
                    </div>
                    <ul className="TopNavigationSM-nav" ref={$nav.ref}>
                        <li
                            className="TopNavigationSM-link"
                            onClick={() => modal.close()}
                            onKeyDown={() => modal.close()}
                            role="menuitem"
                        >
                            <NavLink
                                href="/projects"
                                hrefPattern="^/(projects|project)(/.+)*$"
                                text="projects"
                                greenBack
                            >
                                <FontAwesomeIcon icon={faFolder} />
                            </NavLink>
                        </li>
                        <li
                            className="TopNavigationSM-link"
                            onClick={() => modal.close()}
                            onKeyDown={() => modal.close()}
                            role="menuitem"
                        >
                            <NavLink
                                href="/teams"
                                hrefPattern="^/(teams|team)(/.+)*$"
                                text="teams"
                                greenBack
                            >
                                <FontAwesomeIcon icon={faUser} />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        </div>
    );
}
