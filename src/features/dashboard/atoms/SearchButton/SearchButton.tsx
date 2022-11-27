import './SearchButton.scoped.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export type SearchButtonProps = {
    className?: string;
    onClick?: () => void;
};
SearchButton.defaultProps = {
    className: '',
    onClick: () => {}
};

export function SearchButton({ className, onClick }: SearchButtonProps) {
    return (
        <button
            className={`SearchButton ${className}`}
            type="button"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    );
}
