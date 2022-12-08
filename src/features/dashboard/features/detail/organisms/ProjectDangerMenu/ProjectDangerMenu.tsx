import './ProjectDangerMenu.scoped.scss';

import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useProjectQuery, useDeleteProjectMutation } from '@/graphql/generated';
import { Modal } from '@/features/dashboard/molecules/Modal';

import { OperationPanel } from '../../molecules/OperationPanel';
import { useModalManageStore } from '../../../../stores/modalManager';
import { ProjectAccessRestrictionModal } from '../ProjectAccessRestrictionModal';

export type ProjectDangerMenuProps = {
    className?: string;
};
ProjectDangerMenu.defaultProps = {
    className: ''
};

export function ProjectDangerMenu({ className }: ProjectDangerMenuProps) {
    const { id } = useParams();
    const query = useProjectQuery({ id: id as string });
    const navigator = useNavigate();
    const deleteMutator = useDeleteProjectMutation();
    const queryQrient = useQueryClient();
    const modal = useModalManageStore();

    let projectRestriction = '';
    let taskRestriction = '';
    switch (query.data?.project.permission_level as string) {
        case 'owner':
            taskRestriction = 'owner';
            projectRestriction = 'owner';
            break;
        case 'administrators':
            taskRestriction = 'administrator or above';
            projectRestriction = 'administrator or above';
            break;
        case 'menber':
            taskRestriction = 'everyone';
            projectRestriction = 'administrator or above';
            break;
        default:
            break;
    }

    const deleteProject = async () => {
        const result = window.confirm('Do you want to delete?');
        if (result) {
            modal.open('ScreenTransition');
            await deleteMutator.mutateAsync({ id: id as string });
            await queryQrient.resetQueries(['dashboardTop']);
            navigator('/projects');
            modal.close();
        }
    };

    return (
        <ul className={`ProjectDangerMenu ${className}`}>
            {/* <li className="ProjectDangerMenu-item">
                <OperationPanel
                    title="Deligate the project."
                    content="The owner will change to other menber and you will be administrator."
                    button="Deligate"
                    onClick={() => {}}
                />
            </li> */}
            <li className="ProjectDangerMenu-item">
                <OperationPanel
                    title="Change access restrictions."
                    content={`Currently, the project's information is editable by ${projectRestriction}, and tasks by ${taskRestriction}.`}
                    button="Change"
                    onClick={() => {
                        modal.open('RestrictionMenu');
                    }}
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
            <Modal visible={modal.isOpened('RestrictionMenu')}>
                <ProjectAccessRestrictionModal />
            </Modal>
        </ul>
    );
}
