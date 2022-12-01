import './List.scoped.scss';

import { useParams } from 'react-router-dom';

import { Task } from '@/graphql/generated';

import { Item } from '../Item';

export type ListProps = {
    className?: string;
    tasks: Task[];
};
List.defaultProps = {
    className: ''
};

export function List({ className, tasks }: ListProps) {
    const { id } = useParams();

    const $tasks: JSX.Element[] = [];
    tasks.forEach((task) => {
        $tasks.push(
            <li className="List-item" key={task.id}>
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
