import '../scss/ProjectTaskView.scss';

import { isMobile } from 'react-device-detect';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { TaskDetail } from '../components/TaskDetail';
import { ProjectChats } from '../components/ProjectChats';

import { ProjectTasks } from '../components/ProjectTasks';

export function ProjectTaskView() {
    return (
        <div className="ProjectTaskView">
            {isMobile ? (
                <Tabs forceRenderTabPanel>
                    <TabList>
                        <Tab>Tasks</Tab>
                        <Tab>Chats</Tab>
                        <Tab>Detail</Tab>
                    </TabList>

                    <TabPanel>
                        <ProjectTasks />
                    </TabPanel>
                    <TabPanel>
                        <ProjectChats />
                    </TabPanel>
                    <TabPanel>
                        <TaskDetail />
                    </TabPanel>
                </Tabs>
            ) : (
                <div className="ProjectTaskView-body">
                    <ProjectTasks />
                    <div className="TaskInfo">
                        <TaskDetail />
                        <ProjectChats />
                    </div>
                </div>
            )}
        </div>
    );
}
