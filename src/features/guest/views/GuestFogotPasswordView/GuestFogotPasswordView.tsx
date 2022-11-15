import './GuestFogotPasswordView.scss';

import { FogotPasswordForm } from '../../organisms/FogotPasswordForm';
import { OtherDocument } from '../../organisms/OtherDocument';
import { PageLinks } from '../../organisms/PageLinks';

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
                <OtherDocument>Reset password ! <br /> This page does not work yet !</OtherDocument>
                <div className="GuestLoginView-right">
                    <FogotPasswordForm />
                    <PageLinks register login />
                </div>
            </div>
        </div>
    );
}
