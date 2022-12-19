import './CreateButton.scoped.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

export type CreateButtonProps = {
    className?: string;
    disabled?: boolean;
    onClickFn: () => void;
};
CreateButton.defaultProps = {
    className: '',
    disabled: false
};

export function CreateButton({
    className,
    disabled,
    onClickFn
}: CreateButtonProps) {
    return disabled ? (
        ('' as unknown as JSX.Element)
    ) : (
        <button
            className={`CreateButton ${className}`}
            type="button"
            onClick={onClickFn}
        >
            <FontAwesomeIcon icon={faPen} />
        </button>
    );
}
