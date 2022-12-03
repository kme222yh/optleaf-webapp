import './TaskDangerMenu.scoped.scss';

import { useParams, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useTaskQuery, useDeleteTaskMutation } from '@/graphql/generated';

import { OperationPanel } from '../../molecules/OperationPanel';
import { useModalManageStore } from '../../../../stores/modalManager';

export type TaskDangerMenuProps = {
    className?: string;
};
TaskDangerMenu.defaultProps = {
    className: ''
};

export function TaskDangerMenu({ className }: TaskDangerMenuProps) {
    const { id, taskId } = useParams();
    const query = useTaskQuery({
        project_id: id as string,
        id: taskId as string
    });
    const navigator = useNavigate();
    const deleteMutator = useDeleteTaskMutation();
    const queryQrient = useQueryClient();
    const modal = useModalManageStore();

    const deleteTask = async () => {
        if (query.isLoading) return;
        const parentId = query.data?.task?.parent?.id;
        const result = window.confirm('Do you want to delete?');
        if (result) {
            modal.open('ScreenTransition');
            await deleteMutator.mutateAsync({
                project_id: id as string,
                id: taskId as string
            });
            await queryQrient.resetQueries([
                'task',
                { project_id: id as string, id: parentId ?? '' }
            ]);
            navigator(`/project/${id}/${parentId ?? ''}`);
            modal.close();
        }
    };

    return (
        <ul className={`TaskDangerMenu ${className}`}>
            <li className="TaskDangerMenu-item">
                <OperationPanel
                    title="Delete this task."
                    content="This task is permanently deleted. This operation cannot be undone."
                    button="Delete"
                    warning
                    onClick={deleteTask}
                />
            </li>
        </ul>
    );
}
