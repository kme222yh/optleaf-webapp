import './ProjectInfo.scoped.scss';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useElementSize } from '@/hooks/useElementSize';
import {
    useProjectQuery,
    UpdateProjectMutationVariables,
    useUpdateProjectMutation
} from '@/graphql/generated';

import { ProjectInfoTitle } from '../ProjectInfoTitle';
import { TaskNumbers } from '../../../../molecules/TaskNumbers';

export type ProjectInfoProps = {
    className?: string;
};
ProjectInfo.defaultProps = {
    className: ''
};

export function ProjectInfo({ className }: ProjectInfoProps) {
    let $description = <p className="ProjectInfo-description">fetching...</p>;

    let updateTimeoutId: NodeJS.Timeout;
    const updateFn = async (data: UpdateProjectMutationVariables) => {
        clearTimeout(updateTimeoutId);
        updateTimeoutId = setTimeout(() => {
            mutation.mutate({
                id: id as string,
                description: data.description
            });
        }, 3000);
    };

    const $header = useElementSize();
    const $layout = useElementSize();
    const bodySize = $layout.height - $header.height - 60;

    const { id } = useParams();
    const query = useProjectQuery({ id: id as string });
    const mutation = useUpdateProjectMutation();
    const form = useForm<UpdateProjectMutationVariables>();

    useEffect(() => {
        form.reset({ description: query.data?.project?.description as string });
    }, [query.isLoading, query.data?.project.description]);

    if (!query.isLoading) {
        const project = query.data?.project;
        if (project?.grant?.edit)
            $description = (
                <textarea
                    className="ProjectInfo-description"
                    {...form.register('description')}
                    onChange={form.handleSubmit(updateFn)}
                />
            );
        else
            $description = (
                <p className="ProjectInfo-description">
                    {project?.description}
                </p>
            );
    }

    return (
        <div className={`ProjectInfo ${className}`} ref={$layout.ref}>
            <div className="ProjectInfo-header" ref={$header.ref}>
                <ProjectInfoTitle />
            </div>
            <div className="ProjectInfo-body" style={{ height: bodySize }}>
                <ul className="ProjectInfo-info">
                    <li className="ProjectInfo-info-item">
                        <span className="ProjectInfo-info-item-title">
                            Created at
                        </span>
                        <span className="ProjectInfo-info-item-data">
                            {query.data?.project?.created_at}
                        </span>
                    </li>
                    <li className="ProjectInfo-info-item">
                        <span className="ProjectInfo-info-item-title">
                            Owner
                        </span>
                        <span className="ProjectInfo-info-item-data">
                            {query.data?.project?.owner?.name}
                        </span>
                    </li>
                </ul>
                <div className="ProjectInfo-tasknum">
                    <TaskNumbers tasks={10} completed={5} />
                </div>
                {$description}
            </div>
        </div>
    );
}
