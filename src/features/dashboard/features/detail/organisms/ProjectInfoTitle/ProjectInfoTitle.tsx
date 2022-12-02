import './ProjectInfoTitle.scoped.scss';

import { useEffect, useState } from 'react';
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
    const [displayMenu, setDisplayMenu] = useState(false);

    const { id } = useParams();
    const query = useProjectQuery({ id: id as string });
    const mutation = useUpdateProjectMutation();
    const form = useForm<UpdateProjectMutationVariables>();

    useEffect(() => {
        if (query.isLoading) {
            form.reset({ name: 'fetching...' });
        } else {
            setDisplayMenu(query.data?.project?.grant.dangerZone as boolean);
            form.reset({ name: query.data?.project?.name as string });
        }
    }, [query.data?.project?.name, query.isLoading]);

    let updateTimeoutId: NodeJS.Timeout;
    const updateFn = () => {
        clearTimeout(updateTimeoutId);
        updateTimeoutId = setTimeout(() => {
            const data: UpdateProjectMutationVariables = {
                name: form.getValues('name'),
                id: id as string
            };
            mutation.mutate(data);
        }, 2000);
    };

    return (
        <div className={`ProjectInfoTitle ${className}`}>
            <InfoTitleWrapper
                title={
                    <input
                        className="ProjectInfoTitle-inline"
                        type="text"
                        {...form.register('name')}
                        onChange={updateFn}
                        disabled={!query.data?.project.grant.edit}
                    />
                }
                menu={<ProjectDangerMenu />}
                displayMenu={displayMenu}
            />
        </div>
    );
}
