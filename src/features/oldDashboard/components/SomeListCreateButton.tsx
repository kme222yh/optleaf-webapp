import '../scss/ProjectListItem.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type SomeListCreateButtonProps = {
    createfunc: () => Promise<void>;
};
export function SomeListCreateButton({
    createfunc
}: SomeListCreateButtonProps) {
    return (
        <li className="ProjectListItem">
            <button
                type="button"
                className="ProjectListItem-body create"
                onClick={createfunc}
            >
                <FontAwesomeIcon className="icon" icon={faPlus} />
            </button>
        </li>
    );
}
