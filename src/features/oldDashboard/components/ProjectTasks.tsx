import '../scss/ProjectTasks.scss';

import {
    useTasksQuery,
    useTaskQuery,
    Task,
    useCreateTaskMutation,
    useUpdateTaskMutation
} from '@/graphql/generated';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import iconCompleted from '@/assets/images/old/completed.svg';
import iconUncompleted from '@/assets/images/old/uncompleted.svg';

import { InfoBlock } from '../layout/InfoBlock';
import { Loading } from '../layout/Loading';

type TaskItemProps = {
    task: Task;
    projectId: string;
    isSelected?: boolean;
};
TaskItem.defaultProps = {
    isSelected: false
};
function TaskItem({ task, projectId, isSelected }: TaskItemProps) {
    const taskQuery = useTaskQuery({
        project_id: projectId,
        id: task.id as string
    });
    const taskMutator = useUpdateTaskMutation();
    const queryQrient = useQueryClient();

    const updateTask = async () => {
        await taskMutator.mutateAsync({
            project_id: projectId,
            id: taskQuery.data?.task?.id as string,
            name: taskQuery.data?.task?.name as string,
            completed: !taskQuery.data?.task?.completed,
            description: taskQuery.data?.task?.description as string
        });
        await queryQrient.resetQueries([
            'tasks',
            {
                project_id: projectId,
                task_id: taskQuery.data?.task?.parent?.id
            }
        ]);
    };

    return (
        <li
            className={`ProjectTasks-item ${isSelected ? 'selected' : ''} ${
                task.completed ? 'completed' : ''
            }`}
        >
            <button
                type="button"
                className="ProjectTasks-item-status"
                onClick={updateTask}
            >
                <img
                    src={task?.completed ? iconCompleted : iconUncompleted}
                    alt="status"
                />
            </button>
            <Link
                className="ProjectTasks-item-title"
                to={`/project/${projectId}/${String(task?.id)}`}
            >
                {task?.name}
            </Link>
        </li>
    );
}

type TaskListProps = {
    tasks: [Task] | undefined;
    projectId: string;
    isLoading?: boolean;
    className?: string;
    children?: React.ReactNode;
};
TaskList.defaultProps = {
    isLoading: false,
    className: '',
    children: null
};
function TaskList({
    tasks,
    projectId,
    isLoading,
    className,
    children
}: TaskListProps) {
    const { taskId } = useParams();
    const taskQuery = useTaskQuery({
        project_id: projectId,
        id: taskId as string
    });
    const $tasks: React.ReactNode[] = [];
    if (tasks?.length) {
        tasks.forEach((task) => {
            $tasks.push(
                <TaskItem
                    task={task}
                    projectId={projectId}
                    key={task.id}
                    isSelected={
                        taskId === task.id ||
                        task.id === taskQuery.data?.task?.parent?.id
                    }
                />
            );
        });
    }
    return (
        <div className={`ProjectTasks-list ${String(className)}`}>
            {isLoading ? <Loading /> : null}
            <ul className="ProjectTasks-list-body">{$tasks}</ul>
            {children}
        </div>
    );
}

function CurrentList() {
    const { projectId, taskId } = useParams();
    const taskQuery = useTaskQuery({
        project_id: projectId as string,
        id: taskId as string
    });
    const tasksQuery = useTasksQuery({
        project_id: projectId as string,
        task_id: taskQuery.data?.task?.parent?.id as string | null
    });
    const navigation = useNavigate();
    const queryQrient = useQueryClient();

    const taskMutator = useCreateTaskMutation();

    const createTask = async () => {
        const task = await taskMutator.mutateAsync({
            project_id: projectId as string,
            task_id: taskQuery.data?.task?.parent?.id,
            name: '新規タスク',
            description: 'ここにタスクの詳細を入力してください！'
        });
        await queryQrient.resetQueries([
            'tasks',
            {
                project_id: projectId,
                task_id: taskQuery.data?.task?.parent?.id
            }
        ]);
        navigation(
            `/project/${projectId as string}/${String(task.createTask?.id)}`
        );
    };

    return (
        <TaskList
            isLoading={tasksQuery.isLoading || taskMutator.isLoading}
            tasks={tasksQuery.data?.tasks as [Task] | undefined}
            projectId={projectId as string}
        >
            <button
                type="button"
                className="ProjectTasks-createButton"
                onClick={createTask}
            >
                <FontAwesomeIcon className="icon" icon={faPen} />
            </button>
        </TaskList>
    );
}

function ParentList() {
    const { projectId, taskId } = useParams();
    const taskQuery = useTaskQuery({
        project_id: projectId as string,
        id: taskId as string
    });
    const parentTasksQuery = useTasksQuery({
        project_id: projectId as string,
        task_id: taskQuery.data?.task?.parent?.parent?.id
    });
    if (!taskQuery.data?.task?.parent?.id) {
        return null;
    }
    return (
        <TaskList
            className="parent"
            isLoading={taskQuery.isLoading}
            tasks={parentTasksQuery.data?.tasks as [Task] | undefined}
            projectId={projectId as string}
        />
    );
}

function ChildrenList() {
    const { projectId, taskId } = useParams();
    const childrenTasksQuery = useTasksQuery({
        project_id: projectId as string,
        task_id: taskId
    });
    const navigation = useNavigate();
    const queryQrient = useQueryClient();
    const taskMutator = useCreateTaskMutation();

    const createTask = async () => {
        const task = await taskMutator.mutateAsync({
            project_id: projectId as string,
            task_id: taskId,
            name: '新規タスク',
            description: 'ここにタスクの詳細を入力してください！'
        });
        await queryQrient.resetQueries([
            'tasks',
            {
                project_id: projectId,
                task_id: taskId
            }
        ]);
        navigation(
            `/project/${projectId as string}/${String(task.createTask?.id)}`
        );
    };

    return (
        <TaskList
            className="children"
            isLoading={childrenTasksQuery.isLoading || taskMutator.isLoading}
            tasks={childrenTasksQuery.data?.tasks as [Task] | undefined}
            projectId={projectId as string}
        >
            <button
                type="button"
                className="ProjectTasks-createButton"
                onClick={createTask}
            >
                <FontAwesomeIcon className="icon" icon={faPen} />
            </button>
        </TaskList>
    );
}

export function ProjectTasks() {
    const { taskId } = useParams();
    // const taskQuery = useTaskQuery({ project_id: projectId as string, id: taskId as string })
    const taskMutator = useCreateTaskMutation();
    return (
        <InfoBlock className="ProjectTasks" isLoading={taskMutator.isLoading}>
            {taskId ? <ParentList /> : null}
            {/* {!taskQuery.isLoading ? <CurrentList /> : <CurrentListDummy />} */}
            <CurrentList />
            {taskId ? <ChildrenList /> : null}
        </InfoBlock>
    );
}
