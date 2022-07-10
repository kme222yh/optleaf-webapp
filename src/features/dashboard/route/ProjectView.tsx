import '../scss/projectView.scss'
import iconCompleted from '@/assets/completed.svg'
import iconUncompleted from '@/assets/uncompleted.svg'

import { useParams } from 'react-router-dom';
import { useProjectQuery } from '@/graphql/generated'

import { ProjectInfo } from '../components/ProjectInfo';
import { ProjectChats } from '../components/ProjectChats';


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


    return (
        <div className="projectView">
            <div className="projectView-body">

                <div className="taskList">
                    <ul className="taskList-body">
                        {$taskList}
                    </ul>
                </div>

                <ProjectChats />

                <ProjectInfo />

            </div>
        </div>
    )
}