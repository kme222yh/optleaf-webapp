import '../scss/ProjectTaskView.scss'

import { TaskDetail } from "../components/TaskDetail"
import { ProjectChats } from '../components/ProjectChats';

import { ProjectTasks } from '../components/ProjectTasks';

export function ProjectTaskView() {
    return (
        <div className="ProjectTaskView">
            <div className="ProjectTaskView-body">

                <ProjectTasks />


                <div className="TaskInfo">
                    <TaskDetail />
                    <ProjectChats />
                </div>


            </div>
        </div>
    )
}