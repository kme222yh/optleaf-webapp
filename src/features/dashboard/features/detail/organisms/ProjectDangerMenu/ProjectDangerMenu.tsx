import './ProjectDangerMenu.scoped.scss';

import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useDeleteProjectMutation } from '@/graphql/generated';

import { OperationPanel } from '../../molecules/OperationPanel';
import { useModalManageStore } from '../../../../stores/modalManager';

export type ProjectDangerMenuProps = {
    className?: string;
};
ProjectDangerMenu.defaultProps = {
    className: ''
};

export function ProjectDangerMenu({ className }: ProjectDangerMenuProps) {
    const { id } = useParams();
    const navigator = useNavigate();
    const deleteMutator = useDeleteProjectMutation();
    const queryQrient = useQueryClient();
    const modal = useModalManageStore();

    const deleteProject = async () => {
        const result = window.confirm('プロジェクトを削除してよろしいですか？');
        if (result) {
            await deleteMutator.mutateAsync({ id: id as string });
            await queryQrient.resetQueries(['dashboardTop']);
            modal.close();
            navigator('/projects');
        }
    };

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
                    onClick={deleteProject}
                />
            </li>
        </ul>
    );
}
