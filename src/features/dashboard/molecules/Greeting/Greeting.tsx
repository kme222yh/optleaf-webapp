import './Greeting.scoped.scss';

import { useAuth } from '@/providers/auth';
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
        <div className={`Greeting ${className}`}>
            <div className="Greeting-body">
                <BigText>Good morning !</BigText>
                <BigText>{user?.name ? user?.name : 'Anonymous'}</BigText>
            </div>
        </div>
    );
}
