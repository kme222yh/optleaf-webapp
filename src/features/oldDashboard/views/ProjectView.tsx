import '../scss/projectView.scss';

import { isMobile } from 'react-device-detect';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { ProjectDetail } from '../components/ProjectDetail';
import { ProjectChats } from '../components/ProjectChats';
import { ProjectTasks } from '../components/ProjectTasks';

import { InfoBlock } from '../layout/InfoBlock';

export function ProjectView() {
    return (
        <div className="projectView">
            {isMobile ? (
                <Tabs forceRenderTabPanel>
                    <TabList>
                        <Tab>Project</Tab>
                        <Tab>Tasks</Tab>
                        <Tab>Chats</Tab>
                    </TabList>

                    <TabPanel>
                        <ProjectTasks />
                    </TabPanel>
                    <TabPanel>
                        <ProjectChats />
                    </TabPanel>
                    <TabPanel>
                        <div className="ProjectInfo">
                            <ProjectDetail />
                            <InfoBlock className="hoge">
                                <p>test</p>
                            </InfoBlock>
                        </div>
                    </TabPanel>
                </Tabs>
            ) : (
                <div className="projectView-body">
                    <ProjectTasks />

                    <ProjectChats />

                    <div className="ProjectInfo">
                        <ProjectDetail />
                        <InfoBlock className="hoge">
                            <p>test</p>
                        </InfoBlock>
                    </div>
                </div>
            )}
        </div>
    );
}
