import './List.scoped.scss';

import { useParams } from 'react-router-dom';

import { Task, useTaskQuery } from '@/graphql/generated';

import { Item } from '../Item';

export type ListProps = {
    className?: string;
    tasks: Task[];
};
List.defaultProps = {
    className: ''
};

export function List({ className, tasks }: ListProps) {
    const { id, taskId } = useParams();
    const query = useTaskQuery({
        project_id: id as string,
        id: taskId as string
    });

    // sort completed task to the bottom
    tasks.sort(
        (v1, v2) =>
            (v1.completed as unknown as number) -
            (v2.completed as unknown as number)
    );

    const $tasks: JSX.Element[] = [];
    tasks.forEach((task) => {
        $tasks.push(
            <li
                className={`List-item ${
                    query.data?.task?.tree.includes(task.id) ? 'current' : ''
                }`}
                key={task.id}
            >
                <Item
                    hasChild={task.has_child}
                    text={task.name}
                    to={`/project/${id}/${String(task.id)}`}
                    isCompleted={task.completed}
                    taskId={task.id}
                />
            </li>
        );
    });

    return <ul className={`List ${className}`}>{$tasks}</ul>;
}
