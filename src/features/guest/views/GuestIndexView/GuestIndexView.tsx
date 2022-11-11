import './GuestIndexView.scss';

import { RegisterForm } from '../../organisms/RegisterForm';
import { TopDocument } from '../../organisms/TopDocument';
import { PageLinks } from '../../organisms/PageLinks';

export type GuestIndexViewProps = {
    className?: string;
};
GuestIndexView.defaultProps = {
    className: ''
};

export function GuestIndexView({ className }: GuestIndexViewProps) {
    return (
        <div className={`GuestIndexView ${className}`}>
            <div className="GuestIndexView-body">
                <TopDocument />
                <div className="GuestIndexView-right">
                    <RegisterForm />
                    <PageLinks login />
                </div>
            </div>
        </div>
    );
}
