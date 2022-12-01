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
    const query = useTaskQuery({ project_id: id as string, id: taskId as string });

    const $tasks: JSX.Element[] = [];
    tasks.forEach((task) => {
        $tasks.push(
            <li className={`List-item ${query.data?.task?.tree.includes(task.id)? 'current': ''}`} key={task.id}>
                <Item
                    hasChild={task.has_child}
                    text={task.name}
                    to={`/project/t2m0j34mutv02/${String(task.id)}`}
                    isCompleted={task.completed}
                />
            </li>
        );
    });

    return (
        <ul className={`List ${className}`}>
            {$tasks}
        </ul>
    );
}
