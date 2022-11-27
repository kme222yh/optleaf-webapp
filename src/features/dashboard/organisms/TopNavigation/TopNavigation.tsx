/* eslint-disable react/no-unknown-property */
import './TopNavigation.scoped.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faUser } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from '../../atoms/NavLink';
import { LeafsLogo } from '../../svg/LeafsLogo';

export type TopNavigationProps = {
    className?: string;
};
TopNavigation.defaultProps = {
    className: ''
};

export function TopNavigation({ className }: TopNavigationProps) {
    return (
        <div className={`TopNavigation ${className}`}>
            <ul className="TopNavigation-body">
                <li className="TopNavigation-link">
                    <NavLink href="/" hrefPattern="^/$" text="top">
                        <LeafsLogo />
                    </NavLink>
                </li>
                <li className="TopNavigation-link">
                    <NavLink
                        href="/projects"
                        hrefPattern="^/(projects|project)(/.+)*$"
                        text="projects"
                    >
                        <FontAwesomeIcon icon={faFolder} />
                    </NavLink>
                </li>
                <li className="TopNavigation-link">
                    <NavLink
                        href="/teams"
                        hrefPattern="^/(teams|team)(/.+)*$"
                        text="teams"
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
