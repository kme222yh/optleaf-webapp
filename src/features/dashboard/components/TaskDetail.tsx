import '../scss/TaskDetail.scss'

import { useParams, useNavigate } from 'react-router-dom';
import { useTaskQuery, useUpdateTaskMutation, UpdateTaskMutationVariables, useDeleteTaskMutation } from '@/graphql/generated'
import { useForm } from 'react-hook-form'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import { InfoBlock } from '../layout/InfoBlock'


class TaskInfoStatus {
    static oldData: UpdateTaskMutationVariables | undefined = undefined;

    static updateTimeoutId: NodeJS.Timeout;
}


const areTaskDataDifferent = (t1: UpdateTaskMutationVariables | undefined, t2: UpdateTaskMutationVariables | undefined) => t1?.name !== t2?.name || t1?.description !== t2?.description;


export function TaskDetail() {
    const { projectId, taskId } = useParams();
    const query = useTaskQuery({ id: taskId as string, project_id: projectId as string });
    const mutation = useUpdateTaskMutation();
    const deleter = useDeleteTaskMutation();
    const navigation = useNavigate();

    const taskInfoForm = useForm<UpdateTaskMutationVariables>();

    if (areTaskDataDifferent(TaskInfoStatus.oldData, query.data?.task as UpdateTaskMutationVariables)) {
        TaskInfoStatus.oldData = query.data?.task as UpdateTaskMutationVariables;
        taskInfoForm.reset(query.data?.task as UpdateTaskMutationVariables);
    }

    const taskInfoIsValid = async (taskData: UpdateTaskMutationVariables) => {
        const mutationData = taskData;
        mutationData.project_id = projectId as string;
        if (areTaskDataDifferent(TaskInfoStatus.oldData, mutationData)) {
            TaskInfoStatus.updateTimeoutId = setTimeout(() => {
                mutation.mutate(mutationData);
            }, 5000)
        }
    }
    const taskInfoIsInValid = (erros: any) => {
        console.log('Fail to update project.')
    }
    const clearTaskUpdateTimeout = () => {
        clearTimeout(TaskInfoStatus.updateTimeoutId);
        console.log('aejoaijefo')
    }

    const deleteTask = async () => {
        const result = window.confirm("このタスクを削除してよろしいですか？");
        if (result) {
            await deleter.mutateAsync({ project_id: projectId as string, id: taskId as string });
            navigation(`/project/${String(projectId)}`);
        }
    }

    return (
        <InfoBlock className='TaskDetail' isLoading={query.isLoading || mutation.isLoading || deleter.isLoading}>
            <form className="TaskDetail-form" onFocus={clearTaskUpdateTimeout} onBlur={taskInfoForm.handleSubmit(taskInfoIsValid, taskInfoIsInValid)}>
                <input className="TaskDetail-title" {...taskInfoForm.register('name', { required: '名前を入力してください' })} />
                <div className='TaskDetail-row'>
                    <p className='TaskDetail-row-head'>Created</p>
                    <p className='TaskDetail-row-body'>{query.data?.task?.created_at}</p>
                </div>
                {query.data?.task?.due_date ? <div className='taskInfo-row'>
                    <p className='TaskDetail-row-head'>Due Date</p>
                    <p className='TaskDetail-row-body'>{query.data?.task?.due_date}</p>
                </div> : null}
                <div className='TaskDetail-row'>
                    <p className='TaskDetail-row-head'>Created by</p>
                    <p className='TaskDetail-row-body'>{query.data?.task?.author?.name}</p>
                </div>
                <textarea className="TaskDetail-description" {...taskInfoForm.register('description', { required: '詳細を入力してください' })} />
            </form>

            <button type='button' className='TaskDetail-deleteButton' onClick={deleteTask}>
                <FontAwesomeIcon className='icon' icon={faTrash} />
            </button>
        </InfoBlock>
    )
}