import './NavLink.scoped.scss';

import { Link, useLocation } from 'react-router-dom';

export type NavLinkProps = {
    className?: string;
    href: string;
    hrefPattern: string;
    text: string;
};
NavLink.defaultProps = {
    className: ''
};

export function NavLink({ className, href, text, hrefPattern }: NavLinkProps) {
    const location = useLocation();
    const isCurrent = location.pathname.match(hrefPattern) !== null;

    return (
        <Link
            to={href}
            className={`NavLink ${className} ${isCurrent ? 'current' : ''}`}
        >
            {text}
        </Link>
    );
}
