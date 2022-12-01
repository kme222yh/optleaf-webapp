import './CreateButton.scoped.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export type CreateButtonProps = {
    className?: string;
    onClick: () => void;
};
CreateButton.defaultProps = {
    className: ''
};

export function CreateButton({ className, onClick }: CreateButtonProps) {
    return (
        <button
            className={`CreateButton ${className}`}
            type="button"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faPen} />
        </button>
    );
}