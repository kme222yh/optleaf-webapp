import './TeamsHeader.scoped.scss';

import { SearchForm } from '../SearchForm';
import { RoundedButton } from '../../atoms/RoundedButton';

export type TeamsHeaderProps = {
    className?: string;
};
TeamsHeader.defaultProps = {
    className: ''
};

export function TeamsHeader({ className }: TeamsHeaderProps) {
    return (
        <div className={`TeamsHeader ${className}`}>
            <div className="TeamsHeader-left">
                <RoundedButton text="Create Team" />
            </div>
            <div className="TeamsHeader-right">
                <SearchForm />
            </div>
        </div>
    );
}
