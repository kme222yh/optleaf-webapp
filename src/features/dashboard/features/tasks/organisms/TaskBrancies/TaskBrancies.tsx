import './TaskBrancies.scoped.scss';

import { useEffect, useState, ReactNode, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useTaskQuery } from '@/graphql/generated';

import { RootTasks } from '../RootTasks';
import { TaskChildren } from '../TaskChildren';

export type TaskBranciesProps = {
    className?: string;
};
TaskBrancies.defaultProps = {
    className: ''
};

export function TaskBrancies({ className }: TaskBranciesProps) {
    const { id, taskId } = useParams();
    const query = useTaskQuery({
        project_id: id as string,
        id: taskId as string
    });

    const $endOfListRef = useRef(null);
    const [taskIdTree, setTaskIdTree] = useState([] as string[]);
    useEffect(() => {
        if (!query.isLoading) {
            setTaskIdTree(query.data?.task?.tree as string[]);
            if ($endOfListRef.current) {
                /* @ts-ignore */
                $endOfListRef.current.scrollIntoView(200);
            }
        }
    }, [query.isLoading]);

    const $brancies: ReactNode[] = [];
    if (taskId) {
        taskIdTree.forEach((val, idx, arr) => {
            $brancies.push(
                <li
                    key={val}
                    ref={idx === arr.length - 1 ? $endOfListRef : null}
                    className={`TaskBrancies-item ${
                        idx === arr.length - 2 ? 'current' : ''
                    }`}
                >
                    <TaskChildren projectId={id as string} taskId={val} />
                </li>
            );
        });
    }

    return (
        <div className={`TaskBrancies ${className}`}>
            <ul className="TaskBrancies-body">
                <li
                    className={`TaskBrancies-item ${
                        $brancies.length <= 1 ? 'current' : ''
                    }`}
                >
                    <RootTasks />
                </li>
                {$brancies}
            </ul>
        </div>
    );
}
