import './SideNavigator.scoped.scss';

import { NavLink } from '../../atoms/NavLink';

export type SideNavigatorProps = {
    className?: string;
};
SideNavigator.defaultProps = {
    className: ''
};

export function SideNavigator({ className }: SideNavigatorProps) {
    return (
        <div className={`SideNavigator ${className}`}>
            <ul className="SideNavigator-body">
                <li className="SideNavigator-link">
                    <NavLink
                        href="/profile"
                        hrefPattern="^/profile"
                        text="profile"
                    />
                </li>
                <li className="SideNavigator-link">
                    <NavLink
                        href="/setting"
                        hrefPattern="^/setting"
                        text="setting"
                    />
                </li>
            </ul>
        </div>
    );
}
