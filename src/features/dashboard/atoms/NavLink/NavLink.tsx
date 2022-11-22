import './NavLink.scoped.scss';

import { Link, useLocation } from 'react-router-dom';

export type NavLinkProps = {
    className?: string;
    href: string;
    hrefPattern: string;
    children: React.ReactNode;
    text: string;
    greenBack?: boolean;
};
NavLink.defaultProps = {
    className: '',
    greenBack: false,
};

export function NavLink({className, href, children, text, hrefPattern, greenBack}: NavLinkProps) {
    const location = useLocation();
    const isCurrent = location.pathname.match(hrefPattern) !== null;

    return (
        <Link to={href} className={`NavLink ${className} ${isCurrent?'current':''} ${greenBack?'greenBack':''}`}>
            <div className="NavLink-body">
                {children}
            </div>
            <span className='NavLink-text'>{text}</span>
        </Link>
    );
}