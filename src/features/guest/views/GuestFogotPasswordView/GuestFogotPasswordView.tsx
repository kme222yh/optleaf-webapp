import './GuestFogotPasswordView.scss';

import { FogotPasswordForm } from '../../organisms/FogotPasswordForm';
import { Text1 } from '../../atoms/Text1';
import { Logo } from '../../svg/Logo';
import { PageLinks } from '../../molecules/PageLinks';

export type GuestFogotPasswordViewProps = {
    className?: string;
};
GuestFogotPasswordView.defaultProps = {
    className: ''
};

export function GuestFogotPasswordView({
    className
}: GuestFogotPasswordViewProps) {
    return (
        <div className={`GuestFogotPasswordView ${className}`}>
            <div className="GuestFogotPasswordView-body">
                <div className="GuestFogotPasswordView-left">
                    <Logo />
                    <Text1>Reset password ! <br /> This page does not work yet !</Text1>
                </div>
                <div className="GuestLoginView-right">
                    <FogotPasswordForm />
                    <PageLinks register login />
                </div>
            </div>
        </div>
    );
}
