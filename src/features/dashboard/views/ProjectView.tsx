import '../scss/projectView.scss'

import { ProjectDetail } from '../components/ProjectDetail';
import { ProjectChats } from '../components/ProjectChats';
import { ProjectTasks } from '../components/ProjectTasks';

import { InfoBlock } from '../layout/InfoBlock'

export function ProjectView() {
    return (
        <div className="projectView">
            <div className="projectView-body">

                <ProjectTasks />

                <ProjectChats />

                <div className="ProjectInfo">
                    <ProjectDetail />
                    <InfoBlock className='hoge'>
                        <p>test</p>
                    </InfoBlock>
                </div>

            </div>
        </div >
    )
}