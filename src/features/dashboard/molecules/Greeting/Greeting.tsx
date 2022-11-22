import './Greeting.scoped.scss';

import { useAuth } from '@/providers/auth';
import { DashboardWhiteAreaAtom } from '../../atoms/DashboardWhiteAreaAtom';
import { BigText } from '../../atoms/BigText';

export type GreetingProps = {
    className?: string;
};
Greeting.defaultProps = {
    className: ''
};

export function Greeting({ className }: GreetingProps) {
    const { user } = useAuth();

    return (
        <DashboardWhiteAreaAtom className={`Greeting ${className}`}>
            <div className="Greeting-body">
                <BigText>Good morning !</BigText>
                <BigText>{user?.name ? user?.name : 'Anonymous'}</BigText>
            </div>
        </DashboardWhiteAreaAtom>
    );
}
