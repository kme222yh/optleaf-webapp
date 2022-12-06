import './Team.scoped.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export type TeamProps = {
    className?: string;
    name: string;
    onClick?: () => void;
    selected?: boolean;
};
Team.defaultProps = {
    className: '',
    onClick: () => {},
    selected: false
};

export function Team({ className, name, onClick, selected }: TeamProps) {
    return (
        <div
            className={`Team ${className}`}
            onClick={onClick}
            onKeyPress={onClick}
            role="button"
            tabIndex={0}
        >
            <p className="Team-name">{name}</p>
            {selected ? (
                <p className="Team-selected">
                    <FontAwesomeIcon icon={faCheck} />
                </p>
            ) : (
                ''
            )}
        </div>
    );
}
