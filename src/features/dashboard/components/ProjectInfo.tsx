import { useParams } from 'react-router-dom';
import { useProjectQuery, useUpdateProjectMutation, UpdateProjectMutationVariables, ProjectQuery } from '@/graphql/generated'
import { useForm } from 'react-hook-form'
import { useQuery, useQueryClient } from 'react-query'

import { Loading } from './Loading'


const areProjectDataDifferent = (p1: UpdateProjectMutationVariables | undefined, p2: UpdateProjectMutationVariables | undefined) => p1?.name !== p2?.name || p1?.description !== p2?.description;


export function ProjectInfo() {
    const { projectId } = useParams();
    const query = useProjectQuery({ id: projectId });
    const mutation = useUpdateProjectMutation();
    const queryClient = useQueryClient();

    const projectInfoForm = useForm<UpdateProjectMutationVariables>();

    const ProjectInfoOldData = useQuery<UpdateProjectMutationVariables>(['ProjectInfoOldData'], { enabled: false });
    if (areProjectDataDifferent(ProjectInfoOldData.data, query.data?.project as UpdateProjectMutationVariables)) {
        queryClient.setQueryData(['ProjectInfoOldData'], query.data?.project);
        projectInfoForm.reset(query.data?.project as UpdateProjectMutationVariables);
    }

    const projectInfoIsValid = async (projectData: UpdateProjectMutationVariables) => {
        if (areProjectDataDifferent(ProjectInfoOldData.data, projectData)) {
            queryClient.setQueryData(['ProjectInfoUpdateTimeoutId'], setTimeout(() => {
                mutation.mutate(projectData);
            }, 5000));
        }
    }
    const projectInfoIsInValid = (erros: any) => {
        console.log('Fail to update project.')
    }
    const timeoutId = useQuery<number>(['ProjectInfoUpdateTimeoutId'], { enabled: false }).data;
    const clearProjectUpdateTimeout = () => {
        clearTimeout(timeoutId);
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