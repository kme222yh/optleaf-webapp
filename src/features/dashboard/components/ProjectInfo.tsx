import { useParams } from 'react-router-dom';
import { useProjectQuery, useUpdateProjectMutation, UpdateProjectMutationVariables, ProjectQuery } from '@/graphql/generated'
import { useForm } from 'react-hook-form'

import { Loading } from './Loading'


class ProjectInfoStatus {
    static oldData: UpdateProjectMutationVariables | undefined = undefined;

    static updateTimeoutId: NodeJS.Timeout;
}


const areProjectDataDifferent = (p1: UpdateProjectMutationVariables | undefined, p2: UpdateProjectMutationVariables | undefined) => p1?.name !== p2?.name || p1?.description !== p2?.description;


export function ProjectInfo() {
    const { projectId } = useParams();
    const query = useProjectQuery({ id: projectId });
    const mutation = useUpdateProjectMutation();

    const projectInfoForm = useForm<UpdateProjectMutationVariables>();

    if (areProjectDataDifferent(ProjectInfoStatus.oldData, query.data?.project as UpdateProjectMutationVariables)) {
        ProjectInfoStatus.oldData = query.data?.project as UpdateProjectMutationVariables;
        projectInfoForm.reset(query.data?.project as UpdateProjectMutationVariables);
    }

    const projectInfoIsValid = async (projectData: UpdateProjectMutationVariables) => {
        if (areProjectDataDifferent(ProjectInfoStatus.oldData, projectData)) {
            ProjectInfoStatus.updateTimeoutId = setTimeout(() => {
                mutation.mutate(projectData);
            }, 5000)
        }
    }
    const projectInfoIsInValid = (erros: any) => {
        console.log('Fail to update project.')
    }
    const clearProjectUpdateTimeout = () => {
        clearTimeout(ProjectInfoStatus.updateTimeoutId);
    }

    return (
        <div className='projectInfo'>
            <form className="projectInfo-body" onFocus={clearProjectUpdateTimeout} onBlur={projectInfoForm.handleSubmit(projectInfoIsValid, projectInfoIsInValid)}>
                {query.isLoading || mutation.isLoading ? <Loading /> : null}
                <input className="projectInfo-title" {...projectInfoForm.register('name', { required: '名前を入力してください' })} />
                <div className='projectInfo-row'>
                    <p className='projectInfo-row-head'>Created</p>
                    <p className='projectInfo-row-body'>{query.data?.project?.created_at}</p>
                </div>
                <div className='projectInfo-row'>
                    <p className='projectInfo-row-head'>Owner</p>
                    <p className='projectInfo-row-body'>{query.data?.project?.owner?.name}</p>
                </div>
                <textarea className="projectInfo-description" {...projectInfoForm.register('description', { required: '詳細を入力してください' })} />
            </form>
        </div>
    );
}