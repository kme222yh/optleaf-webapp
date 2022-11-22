/* eslint-disable react/no-unknown-property */
import './TopNavigation.scoped.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faUser } from '@fortawesome/free-solid-svg-icons';

import { DashboardWhiteAreaAtom } from '../../atoms/DashboardWhiteAreaAtom';
import { NavLink } from '../../atoms/NavLink';


export type TopNavigationProps = {
    className?: string;
};
TopNavigation.defaultProps = {
    className: ''
};

export function TopNavigation({ className }: TopNavigationProps) {
    return (
        <DashboardWhiteAreaAtom className={`TopNavigation ${className}`}>
            <ul className="TopNavigation-body">
                <li className="TopNavigation-link">
                    <NavLink href="/" hrefPattern="^/$" text="top">
                        <svg
                            width="34"
                            height="26"
                            viewBox="0 0 34 26"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17.0116 0.973489C6.75922 1.87046 -0.824855 10.9088 0.0721141 21.1612C0.183335 22.4325 1.29596 23.3755 2.56476 23.2811L8.30573 24.6066C19.587 27.211 30.8436 20.1771 33.4481 8.89585L27.4397 7.5087C28.1083 5.13499 28.3663 2.60226 28.1386 4.57772e-06L17.0116 0.973489Z"
                            />
                        </svg>
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
        </DashboardWhiteAreaAtom>
    );
}
