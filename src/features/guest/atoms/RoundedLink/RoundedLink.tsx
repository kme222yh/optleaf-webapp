import './RoundedLink.scoped.scss';

import { Link } from 'react-router-dom';

export type RoundedLinkProps = {
    className?: string;
    text: string;
    layout_reverse?: boolean;
    collor_reverse?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    href: string;
};
RoundedLink.defaultProps = {
    className: '',
    layout_reverse: false,
    collor_reverse: false,
    disabled: false,
    icon: null
};

export function RoundedLink({
    className,
    text,
    icon,
    layout_reverse,
    collor_reverse,
    disabled,
    href
}: RoundedLinkProps) {
    return (
        <Link
            to={href}
            className={`RoundedLink ${className}${
                collor_reverse ? ' collor_reverse' : ''
            }${disabled ? ' disabled' : ''}`}
        >
            {layout_reverse ? (
                <span className="RoundedLink-text">{text}</span>
            ) : (
                ''
            )}
            {icon ? <span className="RoundedLink-icon">{icon}</span> : ''}
            {!layout_reverse ? (
                <span className="RoundedLink-text">{text}</span>
            ) : (
                ''
            )}
        </Link>
    );
}
