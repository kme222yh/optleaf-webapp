import './Profile.scoped.scss';

import { UserIcon } from '@/features/dashboard/atoms/UserIcon';
import { useAuth } from '@/providers/auth';
import { formatDate } from '@/lib/date';

import { RoundedButton } from '../../atoms/RoundedButton';
import { RoundedLink } from '../../atoms/RoundedLink';
import { ResendVerifyMail } from '../../api/user';

export type ProfileProps = {
    className?: string;
    waitingFn: (v: boolean) => void;
};
Profile.defaultProps = {
    className: ''
};

export function Profile({ className, waitingFn }: ProfileProps) {
    const { user } = useAuth();

    const resendVerifyMailFn = async () => {
        waitingFn(true);
        try {
            await ResendVerifyMail();
        } catch (error) {
            console.log(error);
        }
        waitingFn(false);
    };

    return (
        <div className={`Profile ${className}`}>
            <div className="Profile-main">
                <div className="Profile-icon">
                    <UserIcon src={user?.icon_image} size="70px" />
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
                    <p className="Profile-sub-row-text">
                        {formatDate(user?.CreatedAt ?? '1912/12/12')}
                    </p>
                </div>
                <div className="Profile-sub-row">
                    <p className="Profile-sub-row-head">Email verified</p>
                    <p className="Profile-sub-row-text">
                        {user?.email_verified ? 'yes' : 'no'}
                    </p>
                    {user?.email_verified ? (
                        ''
                    ) : (
                        <div className="Profile-sub-row-button">
                            <RoundedButton
                                text="Resend verify mail"
                                onClick={resendVerifyMailFn}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
