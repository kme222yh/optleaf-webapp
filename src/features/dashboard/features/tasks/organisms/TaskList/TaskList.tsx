import './TaskList.scoped.scss';

import { useEffect, useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useTaskQuery } from '@/graphql/generated';

import { RootTasks } from '../RootTasks';
import { TaskChildren } from '../TaskChildren';

type RetrieveChildrenProps = {
    projectId: string;
    taskId: string;
    current: boolean;
};
function RetrieveChildren({
    projectId,
    taskId,
    current
}: RetrieveChildrenProps): JSX.Element {
    const { taskId: curentTaksId } = useParams();
    const query = useTaskQuery({ project_id: projectId, id: taskId });
    const needToRender = !query.isLoading && query.data?.task?.parent?.id;
    const isThereElm = query.isLoading || query.isFetching || (query.data?.task?.children? query.data?.task?.children.length: 0);
    return (
        <>
            {needToRender ? (
                <RetrieveChildren
                    projectId={projectId}
                    taskId={query.data?.task?.parent?.id as string}
                    current={curentTaksId===taskId}
                />
            ) : (
                ''
            )}
            <li className={`TaskList-branch ${current? 'current': ''} ${isThereElm? '': 'empty'}`}>
                <TaskChildren projectId={projectId} taskId={taskId} />
            </li>
        </>
    );
}

export type TaskListProps = {
    className?: string;
};
TaskList.defaultProps = {
    className: ''
};

export function TaskList({ className }: TaskListProps) {
    const { id, taskId } = useParams();
    const query = useTaskQuery({ project_id: id as string, id: taskId as string });
    const isRoot = !query.isLoading && (!query.data?.task?.parent?.id);

    const [$el, setEl] = useState<JSX.Element>(<div/>);
    useEffect(()=>{
        if(taskId){
            setEl(<RetrieveChildren
                projectId={id as string}
                taskId={taskId}
                current={false}
            />);
        }
    }, [id, taskId]);
    useLayoutEffect(() => {
        const $current = document.getElementsByClassName('current');
        console.log($current);
        if($current.length > 0){
            console.log('aaaaaaaa');
            ($current[0] as HTMLElement).scrollIntoView();
        }
    }, [$el]);

    return (
        <div className={`TaskList ${className} ${taskId? 'taskPage': ''}`}>
            <div className="TaskList-body">
                <div className={`TaskList-root ${isRoot? 'current': ''}`}>
                    <RootTasks />
                </div>
                <ul className="TaskList-brancies">
                    {$el}
                </ul>
            </div>
        </div>
    );
}
