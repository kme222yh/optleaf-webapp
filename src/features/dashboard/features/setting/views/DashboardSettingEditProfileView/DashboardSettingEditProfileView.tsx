import './DashboardSettingEditProfileView.scss';

import { useState } from 'react';

import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';

import { EditProfileForm } from '../../organisms/EditProfileForm';

export type DashboardSettingEditProfileViewProps = {
    className?: string;
};
DashboardSettingEditProfileView.defaultProps = {
    className: ''
};

export function DashboardSettingEditProfileView({
    className
}: DashboardSettingEditProfileViewProps) {
    const [waiting, setWaiting] = useState(false);

    return (
        <div className={`DashboardSettingEditProfileView ${className}`}>
            <ScreenSpinner visible={waiting} />
            <div className="DashboardSettingEditProfileView-body">
                <p className="DashboardSettingEditProfileView-title">
                    Edit Profile
                </p>
                <EditProfileForm waitingFn={setWaiting} />
            </div>
        </div>
    );
}
