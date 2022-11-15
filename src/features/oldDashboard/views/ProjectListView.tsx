import '../scss/ProjectListView.scss';

import { useNavigate } from 'react-router-dom';
import {
    useProjectsQuery,
    useCreateProjectMutation,
    Project
} from '@/graphql/generated';

import { Loading } from '../layout/Loading';
import { ProjectListItem } from '../components/ProjectListItem';
import { SomeListCreateButton } from '../components/SomeListCreateButton';

export function ProjectListView() {
    const projectData = useProjectsQuery();
    const navigation = useNavigate();
    const projectMutator = useCreateProjectMutation();
    const $projects = [];

    let projectLength = 0;
    if (!projectData.isLoading) {
        projectLength = projectData.data!.projects!.length;
        for (let i = 0; i < projectLength; i += 1) {
            const project = projectData.data!.projects![i];
            $projects.push(
                <ProjectListItem key={i} data={project as Project} />
            );
        }
    }

    const createProject = async () => {
        const project = await projectMutator.mutateAsync({
            name: '新規プロジェクト',
            description: 'ここにプロジェクトの詳細を入力してください！'
        });
        navigation(`/project/${String(project.createProject?.id)}`);
    };

    return (
        <div className="ProjectListView">
            {projectData.isLoading || projectMutator.isLoading ? (
                <Loading />
            ) : null}

            <div className="ProjectListView-body">
                <h2 className="ProjectListView-title">Project List</h2>

                <ul className="ProjectListView-list">
                    <SomeListCreateButton createfunc={createProject} />
                    {$projects}
                </ul>
            </div>
        </div>
    );
}
