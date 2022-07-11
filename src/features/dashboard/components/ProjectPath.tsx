import '../scss/ProjectPath.scss'

import { Link, useParams } from 'react-router-dom';

import { useProjectQuery, useUpdateProjectMutation, UpdateProjectMutationVariables, ProjectQuery } from '@/graphql/generated'


export function ProjectPath() {
    const { projectId } = useParams();
    const project = useProjectQuery({ id: projectId });

    return (
        <div className="ProjectPath">
            <div className="ProjectPath-body">
                <Link className='ProjectPath-project' to={`/project/${String(projectId)}`}>{project.data?.project?.name}</Link>
            </div>
        </div>
    )
}