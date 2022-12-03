import './Item.scoped.scss';

import { Link, useParams } from 'react-router-dom';

import {
    useUpdateTaskMutation,
    UpdateTaskMutationVariables,
    ProjectQueryVariables,
    TaskQueryVariables
} from '@/graphql/generated';
import { useQueryClient } from 'react-query';

import { TriangleRight } from '@/features/dashboard/svg/TriangleRight';
import { Leaf } from '@/features/dashboard/svg/Leaf';

export type ItemProps = {
    className?: string;
    isCompleted: boolean;
    text: string;
    hasChild: boolean;
    to: string;
    taskId: string;
};
Item.defaultProps = {
    className: ''
};

export function Item({
    className,
    isCompleted,
    text,
    to,
    hasChild,
    taskId
}: ItemProps) {
    const { id } = useParams();
    const mutator = useUpdateTaskMutation();
    const queryClient = useQueryClient();

    const switchCompleteTask = async () => {
        const data: UpdateTaskMutationVariables = {
            project_id: id as string,
            id: taskId as string,
            completed: !isCompleted
        };
        const task = await mutator.mutateAsync(data);
        if (task.updateTask?.parent?.id) {
            await queryClient.invalidateQueries([
                'task',
                {
                    project_id: id,
                    id: task.updateTask?.parent?.id
                } as TaskQueryVariables
            ]);
        } else {
            await queryClient.invalidateQueries([
                'project',
                { id } as ProjectQueryVariables
            ]);
        }
    };

    return (
        <div className={`Item ${className} ${isCompleted ? 'completed' : ''}`}>
            <button
                className="Item-leaf"
                type="button"
                onClick={switchCompleteTask}
            >
                <Leaf fill={isCompleted} />
            </button>
            <Link className="Item-link" to={to}>
                <span className="Item-text">{text}</span>
                {hasChild ? (
                    <span className="Item-arrow">
                        <TriangleRight />
                    </span>
                ) : (
                    ''
                )}
            </Link>
        </div>
    );
}
