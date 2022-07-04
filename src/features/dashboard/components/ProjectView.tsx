import '../scss/projectView.scss'
import iconCompleted from '@/assets/completed.svg'
import iconUncompleted from '@/assets/uncompleted.svg'

import { useParams } from 'react-router-dom';
import { useProjectQuery } from '@/graphql/generated'


export function ProjectView() {
    const { projectId } = useParams();
    const { data, isLoading } = useProjectQuery({ id: projectId });


    const $taskList = [];
    let taskLength = 0;
    if (isLoading) {
        taskLength = 1
        for (let i = 0; i < taskLength; i += 1) {
            $taskList.push(
                <li className="taskList-item" key={i}>
                    <a className='taskList-item-status' href="/"><img src={iconCompleted} alt="completed" /></a>
                    <a className='taskList-item-title' href="/">すごく頑張る</a>
                </li>
            )
        }
    }


    const $chatList = [];
    // if (isLoading) {
    for (let i = 0; i < 10; i += 1) {
        $chatList.push(
            <li className="chatList-item" key={i}>
                <div className="chatList-item-icon">
                    <div className="chatList-item-icon-circle" />
                </div>
                <div className="chatList-item-content">
                    <p className="chatList-item-author">名無さん</p>
                    <p className='chatList-item-text'>もしおわんなかったらどうする？<br />開発進められんよな</p>
                </div>
                <small className='chatList-item-date'>2020/12/4</small>
            </li>
        )
    }
    // }


    return (
        <div className="projectView">
            <div className="projectView-body">

                <div className="taskList">
                    <ul className="taskList-body">
                        {$taskList}
                    </ul>
                </div>

                <div className="chatList">
                    <div className="chatList-wrap">
                        <ul className="chatList-body">
                            {$chatList}
                        </ul>
                    </div>
                    <div className="chatList-form">
                        <div className="chatList-form-body">
                            <div className='chatList-form-buttons'>
                                <button type='button' className='send'>send</button>
                            </div>
                            <textarea className='chatList-form-input' placeholder='メッセージを入力…' />
                        </div>
                    </div>
                </div>

                <div className='projectInfo'>
                    <div className="projectInfo-body">
                        <p className="projectInfo-title">{data?.project?.name}</p>
                        <div className='projectInfo-row'>
                            <p className='projectInfo-row-head'>Created</p>
                            <p className='projectInfo-row-body'>{data?.project?.created_at}</p>
                        </div>
                        <div className='projectInfo-row'>
                            <p className='projectInfo-row-head'>Owner</p>
                            <p className='projectInfo-row-body'>{data?.project?.owner?.name}</p>
                        </div>
                        <p className='projectInfo-description'>{data?.project?.description}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}