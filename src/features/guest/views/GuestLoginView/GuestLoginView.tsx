import './GuestLoginView.scss';

import { LoginForm } from '../../organisms/LoginForm';
import { OtherDocument } from '../../organisms/OtherDocument';
import { PageLinks } from '../../organisms/PageLinks';

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
                <OtherDocument>Welcome Back !</OtherDocument>
                <div className="GuestLoginView-right">
                    <LoginForm />
                    <PageLinks register fogot />
                </div>
            </div>
        </div>
    );
}
