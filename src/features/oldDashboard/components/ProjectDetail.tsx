/* eslint-disable no-alert */
import '../scss/ProjectDetail.scss';

import { useParams, useNavigate } from 'react-router-dom';
import {
    useProjectQuery,
    useUpdateProjectMutation,
    UpdateProjectMutationVariables,
    useDeleteProjectMutation
} from '@/graphql/generated';
import { useForm } from 'react-hook-form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useQueryClient } from 'react-query';
import { InfoBlock } from '../layout/InfoBlock';

class ProjectInfoStatus {
    static oldData: UpdateProjectMutationVariables | undefined = undefined;

    static updateTimeoutId: NodeJS.Timeout;
}

const areProjectDataDifferent = (
    p1: UpdateProjectMutationVariables | undefined,
    p2: UpdateProjectMutationVariables | undefined
) => p1?.name !== p2?.name || p1?.description !== p2?.description;

export function ProjectDetail() {
    const { projectId } = useParams();
    const query = useProjectQuery({ id: projectId });
    const mutation = useUpdateProjectMutation();
    const deleter = useDeleteProjectMutation();
    const navigation = useNavigate();
    const queryQrient = useQueryClient();

    const projectInfoForm = useForm<UpdateProjectMutationVariables>();

    if (
        areProjectDataDifferent(
            ProjectInfoStatus.oldData,
            query.data?.project as UpdateProjectMutationVariables
        )
    ) {
        ProjectInfoStatus.oldData = query.data
            ?.project as UpdateProjectMutationVariables;
        projectInfoForm.reset(
            query.data?.project as UpdateProjectMutationVariables
        );
    }

    const projectInfoIsValid = async (
        projectData: UpdateProjectMutationVariables
    ) => {
        if (areProjectDataDifferent(ProjectInfoStatus.oldData, projectData)) {
            ProjectInfoStatus.updateTimeoutId = setTimeout(() => {
                mutation.mutate(projectData);
            }, 5000);
        }
    };
    const clearProjectUpdateTimeout = () => {
        clearTimeout(ProjectInfoStatus.updateTimeoutId);
    };

    const deleteProject = async () => {
        const result = window.confirm('プロジェクトを削除してよろしいですか？');
        if (result) {
            await deleter.mutateAsync({ id: projectId as string });
            await queryQrient.resetQueries(['projects']);
            navigation(`/projects`);
        }
    };

    return (
        <InfoBlock
            className="ProjectDetail"
            isLoading={
                query.isLoading || mutation.isLoading || deleter.isLoading
            }
        >
            <form
                className="ProjectDetail-form"
                onFocus={clearProjectUpdateTimeout}
                onBlur={projectInfoForm.handleSubmit(projectInfoIsValid)}
            >
                <input
                    className="ProjectDetail-title"
                    {...projectInfoForm.register('name', {
                        required: '名前を入力してください'
                    })}
                />
                <div className="ProjectDetail-row">
                    <p className="ProjectDetail-row-head">Created</p>
                    <p className="ProjectDetail-row-body">
                        {query.data?.project?.created_at}
                    </p>
                </div>
                <div className="ProjectDetail-row">
                    <p className="ProjectDetail-row-head">Owner</p>
                    <p className="ProjectDetail-row-body">
                        {query.data?.project?.owner?.name}
                    </p>
                </div>
                <textarea
                    className="ProjectDetail-description"
                    {...projectInfoForm.register('description', {
                        required: '詳細を入力してください'
                    })}
                />
            </form>

            <button
                type="button"
                className="ProjectDetail-deleteButton"
                onClick={deleteProject}
            >
                <FontAwesomeIcon className="icon" icon={faTrash} />
            </button>
        </InfoBlock>
    );
}
