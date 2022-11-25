import './PlusButtonSM.scoped.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export type PlusButtonSMProps = {
    className?: string;
    onClick?: () => void;
};
PlusButtonSM.defaultProps = {
    className: '',
    onClick: () => {}
};

export function PlusButtonSM({ className, onClick }: PlusButtonSMProps) {
    return (
        <div className={`PlusButtonSM ${className}`}>
            <button
                type="button"
                className="PlusButtonSM-body"
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
}
