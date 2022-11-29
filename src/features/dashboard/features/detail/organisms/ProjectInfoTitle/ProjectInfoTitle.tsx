import './ProjectInfoTitle.scoped.scss';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    useProjectQuery,
    UpdateProjectMutationVariables,
    useUpdateProjectMutation
} from '@/graphql/generated';
import { useForm } from 'react-hook-form';

import { InfoTitleWrapper } from '../../molecules/InfoTitleWrapper';
import { ProjectDangerMenu } from '../ProjectDangerMenu';

export type ProjectInfoTitleProps = {
    className?: string;
};
ProjectInfoTitle.defaultProps = {
    className: ''
};

export function ProjectInfoTitle({ className }: ProjectInfoTitleProps) {
    let $title = <p>fetching...</p>;

    const { id } = useParams();
    const query = useProjectQuery({ id });
    const mutation = useUpdateProjectMutation();
    const form = useForm<UpdateProjectMutationVariables>();

    let updateTimeoutId: NodeJS.Timeout;
    const updateFn = async (data: UpdateProjectMutationVariables) => {
        clearTimeout(updateTimeoutId);
        updateTimeoutId = setTimeout(() => {
            mutation.mutate({
                id: id as string,
                name: data.name
            });
        }, 3000);
    };

    useEffect(() => {
        form.reset({ name: query.data?.project?.name as string });
    }, [query.isFetching]);

    if (!query.isFetching) {
        const project = query.data?.project;
        if (project?.grant?.edit)
            $title = (
                <input
                    className="ProjectInfoTitle-inline"
                    type="text"
                    {...form.register('name')}
                    onChange={form.handleSubmit(updateFn)}
                />
            );
        else
            $title = <p className="ProjectInfoTitle-inline">{project?.name}</p>;
    }

    return (
        <div className={`ProjectInfoTitle ${className}`}>
            <InfoTitleWrapper
                title={$title}
                menu={<ProjectDangerMenu />}
                displayMenu={query.data?.project?.grant?.dangerZone}
            />
        </div>
    );
}
