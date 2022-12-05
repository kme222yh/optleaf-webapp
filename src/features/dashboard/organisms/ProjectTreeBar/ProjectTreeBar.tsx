import './ProjectTreeBar.scoped.scss';

import { useEffect, useState, ReactNode } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useProjectQuery, useTaskQuery } from '@/graphql/generated';

export type TaskNodeProps = {
    id: string;
};
function TaskNode({ id }: TaskNodeProps) {
    const { id: projectId, taskId } = useParams();
    const query = useTaskQuery({
        project_id: projectId as string,
        id
    });
    const [name, setName] = useState<string>('fetching...');
    useEffect(() => {
        if (!query.isLoading) {
            setName(query.data?.task?.name ?? '');
            const $el = document.getElementsByClassName(
                '.ProjectTreeBar-item.current'
            );
            $el.item(0)?.scrollIntoView();
        }
    }, [query.isLoading, query.data?.task?.name]);
    return (
        <li className={`ProjectTreeBar-item ${taskId === id ? 'current' : ''}`}>
            <Link to={`/project/${projectId ?? ''}/${id}`}>{name}</Link>
        </li>
    );
}

function TaskTree() {
    const { id, taskId } = useParams();
    const query = useTaskQuery({
        project_id: id as string,
        id: taskId as string
    });
    const [tree, setTree] = useState<string[]>([]);
    useEffect(() => {
        if (!query.isLoading) {
            setTree(query.data?.task?.tree ?? []);
        }
    }, [query.isLoading, query.data?.task?.tree]);
    const $items: ReactNode[] = [];
    tree.forEach((val) => {
        $items.push(<TaskNode id={val} key={val} />);
    });
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>{$items}</>
    );
}

export type ProjectTreeBarProps = {
    className?: string;
};
ProjectTreeBar.defaultProps = {
    className: ''
};

export function ProjectTreeBar({ className }: ProjectTreeBarProps) {
    const { id, taskId } = useParams();
    const query = useProjectQuery({
        id: id as string
    });

    const [projectName, setProjectName] = useState('');
    useEffect(() => {
        if (!query.isLoading) {
            setProjectName(query.data?.project.name ?? '');
        }
    }, [query.isLoading, query.data?.project.name]);

    return (
        <div className={`ProjectTreeBar ${className}`}>
            <ul className="ProjectTreeBar-body">
                <li
                    className={`ProjectTreeBar-item ${taskId ? '' : 'current'}`}
                    key={id ?? ''}
                >
                    <Link to={`/project/${id ?? ''}`}>{projectName}</Link>
                </li>
                {taskId ? <TaskTree /> : ''}
            </ul>
        </div>
    );
}
