import './GuestIndexView.scss';

import { Register } from '../../features/form';
import { Text1 } from '../../atoms/Text1';
import { Logo } from '../../svg/Logo';
import { PageLinks } from '../../molecules/PageLinks';

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
                <div className="GuestIndexView-left">
                    <Text1>Optimize</Text1>
                    <Text1>Organize</Text1>
                    <Text1>Collaboration</Text1>
                    <Logo />
                    <Text1>
                        Start new project
                        <br />
                        with Optleaf
                    </Text1>
                </div>
                <div className="GuestIndexView-right">
                    <Register />
                    <PageLinks login />
                </div>
            </div>
        </div>
    );
}
