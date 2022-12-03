import './Logo.scoped.scss';

import OptleafLogo from '@/assets/images/logo/green.svg';

export type LogoProps = {
    className?: string;
};
Logo.defaultProps = {
    className: ''
};

export function Logo({ className }: LogoProps) {
    return (
        <img
            className={`Logo ${className}`}
            src={OptleafLogo}
            alt="Optleaf logo"
        />
    );
}
