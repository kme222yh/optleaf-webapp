import './Greeting.scoped.scss';

import { BigText } from '../../atoms/BigText';

export type GreetingProps = {
    className?: string;
    userName: string;
};
Greeting.defaultProps = {
    className: ''
};

export function Greeting({ className, userName }: GreetingProps) {
    return (
        <div className={`Greeting ${className}`}>
            <div className="Greeting-body">
                <BigText>Good morning !</BigText>
                <BigText>{userName || 'Anonymous'}</BigText>
            </div>
        </div>
    );
}
