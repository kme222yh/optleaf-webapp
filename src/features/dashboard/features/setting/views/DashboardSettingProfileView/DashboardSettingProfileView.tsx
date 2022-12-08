import './DashboardSettingProfileView.scss';

import { useState } from 'react';

import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';

import { Profile as DisplayProfile } from '../../organisms/Profile';
import { ChangePasswordForm } from '../../organisms/ChangePasswordForm';
import { DeleteAccountForm } from '../../organisms/DeleteAccountForm';

export type DashboardSettingProfileViewProps = {
    className?: string;
};
DashboardSettingProfileView.defaultProps = {
    className: ''
};

export function DashboardSettingProfileView({
    className
}: DashboardSettingProfileViewProps) {
    const [waiting, setWaiting] = useState(false);

    return (
        <div className={`DashboardSettingProfileView ${className}`}>
            <ScreenSpinner visible={waiting} />
            <div className="DashboardSettingProfileView-body">
                <p className="DashboardSettingProfileView-title">
                    Your Account
                </p>
                <DisplayProfile />
                <hr />
                <ChangePasswordForm waitingFn={setWaiting} />
                <hr />
                <DeleteAccountForm waitingFn={setWaiting} />
            </div>
        </div>
    );
}
