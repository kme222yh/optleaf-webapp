import './PageLinks.scoped.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeft,
    faRightToBracket
} from '@fortawesome/free-solid-svg-icons';
import { RoundedLink } from '../../atoms/RoundedLink';
import { TextLink } from '../../atoms/TextLink';

export type PageLinksProps = {
    className?: string;
    login?: boolean;
    register?: boolean;
    fogot?: boolean;
};
PageLinks.defaultProps = {
    className: '',
    login: false,
    register: false,
    fogot: false
};

export function PageLinks({
    className,
    login,
    register,
    fogot
}: PageLinksProps) {
    let $right: React.ReactNode;

    const $left = register ? (
        <RoundedLink
            className="register"
            text="register"
            href="/"
            icon={<FontAwesomeIcon icon={faArrowLeft} />}
        />
    ) : (
        <span />
    );

    if (login) {
        $right = (
            <RoundedLink
                className="login"
                text="login"
                href="/login"
                icon={<FontAwesomeIcon icon={faRightToBracket} />}
                layout_reverse
            />
        );
    } else if (fogot) {
        $right = (
            <TextLink href="/fogot_password">Forgot your password ?</TextLink>
        );
    } else {
        $right = <span />;
    }

    return (
        <div className={`PageLinks ${className}`}>
            {$left}
            {$right}
        </div>
    );
}
