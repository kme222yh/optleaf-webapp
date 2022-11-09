import './index.scss';

import { Link } from 'react-router-dom';

export type RoundedLinkProps = {
    text: string;
    layout_reverse?: boolean;
    collor_reverse?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    href: string;
};
RoundedLink.defaultProps = {
    layout_reverse: false,
    collor_reverse: false,
    disabled: false,
    icon: null
};

export function RoundedLink({
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
            className={`RoundedLink${
                collor_reverse ? ' collor_reverse' : ''
            }${disabled ? ' disabled' : ''}`}
        >
            {layout_reverse ? (
                <span className="RoundedLink-text">{text}</span>
            ) : (
                ''
            )}
            <span className="RoundedLink-icon">{icon}</span>
            {!layout_reverse ? (
                <span className="RoundedLink-text">{text}</span>
            ) : (
                ''
            )}
        </Link>
    );
}
