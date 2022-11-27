import './PreviewLink.scoped.scss';

import { Link } from 'react-router-dom';

import { UserIconRow } from '../UserIconRow';

export type PreviewLinkProps = {
    className?: string;
    name: string;
    content: string;
    to: string;
    icons?: string[];
};
PreviewLink.defaultProps = {
    className: '',
    icons: []
};

export function PreviewLink({
    className,
    name,
    content,
    to,
    icons
}: PreviewLinkProps) {
    return (
        <Link className={`PreviewLink ${className}`} to={to}>
            <div className="PreviewLink-body">
                <p className="PreviewLink-name">{name}</p>
                <p className="PreviewLink-content">{content}</p>
                <UserIconRow
                    icons={icons as string[]}
                    maxDisplay={6}
                    height="20px"
                />
            </div>
        </Link>
    );
}
