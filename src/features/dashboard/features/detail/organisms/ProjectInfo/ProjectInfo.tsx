import './ProjectInfo.scoped.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
    useProjectQuery,
    UpdateProjectMutationVariables,
    useUpdateProjectMutation
} from '@/graphql/generated';
import { formatDate } from '@/lib/date';
import { useMessanger } from '@/features/dashboard/hooks/useMessanger';

import { ProjectInfoTitle } from '../ProjectInfoTitle';
// import { TaskNumbers } from '../../../../molecules/TaskNumbers';

export type ProjectInfoProps = {
    className?: string;
};
ProjectInfo.defaultProps = {
    className: ''
};

export function ProjectInfo({ className }: ProjectInfoProps) {
    const { id } = useParams();
    const query = useProjectQuery({ id: id as string });
    const mutation = useUpdateProjectMutation();
    const form = useForm<UpdateProjectMutationVariables>();
    const messanger = useMessanger();
    const [isFocused, setIsFocused] = useState(false);

    let updateTimeoutId: NodeJS.Timeout;
    const updateFn = (event: any) => {
        clearTimeout(updateTimeoutId);
        updateTimeoutId = setTimeout(async () => {
            if (!event?.target?.value ?? form.getValues('description')) return;
            const data: UpdateProjectMutationVariables = {
                description:
                    event?.target?.value ?? form.getValues('description'),
                id: id as string
            };
            try {
                await mutation.mutateAsync(data);
            } catch (error) {
                messanger.push('Failed to update.', 'warning');
            }
        }, 2000);
    };

    useEffect(() => {
        if (query.isLoading) {
            form.reset({ description: 'fetching...' });
            return;
        }
        if (isFocused) return;
        form.reset({ description: query.data?.project?.description as string });
    }, [query.isLoading, query.data?.project.description]);

    return (
        <div className={`ProjectInfo ${className}`}>
            <div className="ProjectInfo-header">
                <ProjectInfoTitle />
            </div>
            <div className="ProjectInfo-body">
                <ul className="ProjectInfo-info">
                    <li className="ProjectInfo-info-item">
                        <span className="ProjectInfo-info-item-title">
                            Created at
                        </span>
                        <span className="ProjectInfo-info-item-data">
                            {formatDate(
                                query.data?.project?.created_at ?? '1912-12-3'
                            )}
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
                {/* <div className="ProjectInfo-tasknum">
                    <TaskNumbers tasks={10} completed={5} />
                </div> */}
                <textarea
                    className="ProjectInfo-description"
                    {...form.register('description')}
                    onChange={updateFn}
                    disabled={
                        !query.data?.project.grant.edit || query.isLoading
                    }
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </div>
        </div>
    );
}
