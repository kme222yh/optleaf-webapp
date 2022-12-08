import './Profile.scoped.scss';

import { UserIcon } from '@/features/dashboard/atoms/UserIcon';
import { useAuth } from '@/providers/auth';

import { RoundedButton } from '../../atoms/RoundedButton';
import { RoundedLink } from '../../atoms/RoundedLink';

export type ProfileProps = {
    className?: string;
};
Profile.defaultProps = {
    className: ''
};

export function Profile({ className }: ProfileProps) {
    const { user } = useAuth();

    return (
        <div className={`Profile ${className}`}>
            <div className="Profile-main">
                <div className="Profile-icon">
                    <UserIcon src="" size="70px" />
                </div>
                <div className="Profile-info">
                    <p className="Profile-name">{user?.name ?? 'anonymous'}</p>
                    <p className="Profile-email">
                        {user?.email ?? 'test@optleaf.site'}
                    </p>
                </div>
                <div className="Profile-edit">
                    <RoundedLink href="/profile/edit" text="Edit profile" />
                </div>
            </div>
            <div className="Profile-sub">
                <div className="Profile-sub-row">
                    <p className="Profile-sub-row-head">Joned at</p>
                    <p className="Profile-sub-row-text">2022/12/12</p>
                </div>
                <div className="Profile-sub-row">
                    <p className="Profile-sub-row-head">Email verified</p>
                    <p className="Profile-sub-row-text">no</p>
                    <div className="Profile-sub-row-button">
                        <RoundedButton text="Resend verify mail" />
                    </div>
                </div>
            </div>
        </div>
    );
}
