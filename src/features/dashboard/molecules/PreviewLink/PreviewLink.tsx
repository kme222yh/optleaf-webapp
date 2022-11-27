import './PreviewLink.scoped.scss';

import { Link } from 'react-router-dom';

import { UserIcon } from '../../atoms/UserIcon';

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
    const $icons = [];
    let iconsLength = 0;
    iconsLength = Array.isArray(icons) ? icons.length : 0;
    for (let i = 0; i < iconsLength; i += 1) {
        if (i >= 5) break;
        $icons.push(
            <li className="PreviewLink-icon" key={i}>
                <UserIcon src={(icons as string[])[i]} size='20px' />
            </li>
        );
    }

    return (
        <Link className={`PreviewLink ${className}`} to={to}>
            <div className="PreviewLink-body">
                <p className="PreviewLink-name">{name}</p>
                <p className="PreviewLink-content">{content}</p>
                {$icons.length > 0 ? (
                    <ul className="PreviewLink-icons">
                        {iconsLength >= 5 ? (
                            <p className="PreviewLink-icons-num">
                                <span className="PreviewLink-icons-plus">
                                    +
                                </span>
                                {iconsLength - 5}
                            </p>
                        ) : (
                            ''
                        )}
                        {$icons}
                    </ul>
                ) : (
                    ''
                )}
            </div>
        </Link>
    );
}
