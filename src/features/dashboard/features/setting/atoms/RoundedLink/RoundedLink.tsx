import './RoundedLink.scoped.scss';

import { Link } from 'react-router-dom';

export type RoundedLinkProps = {
    className?: string;
    href: string;
    text: string;
};
RoundedLink.defaultProps = {
    className: ''
};

export function RoundedLink({ className, href, text }: RoundedLinkProps) {
    return (
        <Link className={`RoundedLink ${className}`} to={href}>
            {text}
        </Link>
    );
}
