import './ProjectDangerMenu.scoped.scss';

import { OperationPanel } from '../../molecules/OperationPanel';

export type ProjectDangerMenuProps = {
    className?: string;
};
ProjectDangerMenu.defaultProps = {
    className: ''
};

export function ProjectDangerMenu({ className }: ProjectDangerMenuProps) {
    // todo: create logic
    return (
        <ul className={`ProjectDangerMenu ${className}`}>
            <li className="ProjectDangerMenu-item">
                <OperationPanel
                    title="Deligate the project."
                    content="The owner will change to other menber and you will be administrator."
                    button="Deligate"
                    onClick={() => {}}
                />
            </li>
            <li className="ProjectDangerMenu-item">
                <OperationPanel
                    title="Change access restrictions."
                    content="Currently, this project can be operated by the owner or more."
                    button="Change"
                    onClick={() => {}}
                />
            </li>
            <li className="ProjectDangerMenu-item">
                <OperationPanel
                    title="Delete the project."
                    content="The project is permanently deleted. This operation cannot be undone."
                    button="Delete"
                    warning
                    onClick={() => {}}
                />
            </li>
        </ul>
    );
}
