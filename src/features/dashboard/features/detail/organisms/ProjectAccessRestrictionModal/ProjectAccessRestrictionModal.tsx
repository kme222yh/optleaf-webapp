/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './ProjectAccessRestrictionModal.scoped.scss';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    ProjectQueryVariables,
    UpdateProjectMutationVariables,
    useProjectQuery,
    useUpdateProjectMutation
} from '@/graphql/generated';
import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';

import { RoundedButton } from '../../atoms/RoundedButton';

export type ProjectAccessRestrictionModalProps = {
    className?: string;
};
ProjectAccessRestrictionModal.defaultProps = {
    className: ''
};

export function ProjectAccessRestrictionModal({
    className
}: ProjectAccessRestrictionModalProps) {
    const { id: projectId } = useParams();
    const projectQuery = useProjectQuery({ id: projectId as string });
    const projectMutator = useUpdateProjectMutation();
    const queryClient = useQueryClient();
    const [restriction, setRestriction] = useState<
        'owner' | 'administrators' | 'menber' | ''
    >('');
    const [waiting, setWaiting] = useState(false);
    const modal = useModalManageStore();

    useEffect(() => {
        if (projectQuery.isLoading) return;
        if (!projectQuery.data) return;
        const { project } = projectQuery.data;
        setRestriction(
            project.permission_level as
                | 'owner'
                | 'administrators'
                | 'menber'
                | ''
        );
    }, [projectQuery.isLoading, projectQuery.data]);

    const updateFn = async () => {
        if (projectQuery.isLoading) return;
        setWaiting(true);
        const data = {
            id: projectId,
            permission_level: restriction
        } as UpdateProjectMutationVariables;
        await projectMutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'project',
            { id: projectId } as ProjectQueryVariables
        ]);
        modal.close();
        setWaiting(false);
    };

    return (
        <div className={`ProjectAccessRestrictionModal ${className}`}>
            <ScreenSpinner visible={waiting} />
            <div className="ProjectAccessRestrictionModal-body">
                <p className="ProjectAccessRestrictionModal-title">
                    Change access restriction
                </p>
                <ul className="ProjectAccessRestrictionModal-list">
                    <li
                        className={`ProjectAccessRestrictionModal-item ${
                            restriction === 'owner' ? 'selected' : ''
                        }`}
                        onClick={() => setRestriction('owner')}
                    >
                        <p className="ProjectAccessRestrictionModal-name">
                            owner
                        </p>
                        <p className="ProjectAccessRestrictionModal-text">
                            project edit : owner only
                            <br />
                            task operation : owner only
                        </p>
                    </li>
                    <li
                        className={`ProjectAccessRestrictionModal-item ${
                            restriction === 'administrators' ? 'selected' : ''
                        }`}
                        onClick={() => setRestriction('administrators')}
                    >
                        <p className="ProjectAccessRestrictionModal-name">
                            admin
                        </p>
                        <p className="ProjectAccessRestrictionModal-text">
                            project edit : admin or above
                            <br />
                            task operation : admin or above
                        </p>
                    </li>
                    <li
                        className={`ProjectAccessRestrictionModal-item ${
                            restriction === 'menber' ? 'selected' : ''
                        }`}
                        onClick={() => setRestriction('menber')}
                    >
                        <p className="ProjectAccessRestrictionModal-name">
                            member
                        </p>
                        <p className="ProjectAccessRestrictionModal-text">
                            project edit : admin or above
                            <br />
                            task operation : everyone
                        </p>
                    </li>
                </ul>
                <RoundedButton text="confirm" onClick={updateFn} />
            </div>
        </div>
    );
}
