import './TextLink.scoped.scss';

import { Link } from 'react-router-dom';

export type TextLinkProps = {
    className?: string;
    href: string;
    children: React.ReactNode;
};
TextLink.defaultProps = {
    className: ''
};

export function TextLink({ className, href, children }: TextLinkProps) {
    return (
        <Link to={href} className={`TextLink ${className}`}>
            {children}
        </Link>
    );
}
