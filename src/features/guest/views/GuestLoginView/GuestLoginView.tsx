import './GuestLoginView.scss';

import { Login } from '../../features/form';
import { Text1 } from '../../atoms/Text1';
import { Logo } from '../../svg/Logo';
import { PageLinks } from '../../molecules/PageLinks';

export type GuestLoginViewProps = {
    className?: string;
};
GuestLoginView.defaultProps = {
    className: ''
};

export function GuestLoginView({ className }: GuestLoginViewProps) {
    return (
        <div className={`GuestLoginView ${className}`}>
            <div className="GuestLoginView-body">
                <div className="GuestLoginView-left">
                    <Logo />
                    <Text1>Welcome Back !</Text1>
                </div>
                <div className="GuestLoginView-right">
                    <Login />
                    <PageLinks register fogot />
                </div>
            </div>
        </div>
    );
}
