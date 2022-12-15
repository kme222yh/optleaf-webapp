import './ProjectUserMenu.scoped.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    ProjectQueryVariables,
    UpdateProjectMutationVariables,
    useProjectQuery,
    User,
    useUpdateProjectMutation
} from '@/graphql/generated';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';
import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';

import { UserMenu } from '../../molecules/UserMenu';

export type ProjectUserMenuProps = {
    className?: string;
    userId: number;
};
ProjectUserMenu.defaultProps = {
    className: ''
};

export function ProjectUserMenu({ className, userId }: ProjectUserMenuProps) {
    const { id: projectId } = useParams();
    const projectQuery = useProjectQuery({ id: projectId as string });
    const projectMutator = useUpdateProjectMutation();
    const queryClient = useQueryClient();
    const modal = useModalManageStore();
    const [waiting, setWaiting] = useState(false);
    const [user, setUser] = useState<User>({
        name: '',
        icon_image: ''
    } as User);
    const [role, setRole] = useState<'member' | 'admin' | ''>('');

    useEffect(() => {
        if (!projectQuery.isLoading) {
            const project = projectQuery.data?.project;
            if (!project) return;
            setRole('');
            let result = project.administrators.find((v) => v.ID === userId);
            if (result) {
                setRole('admin');
                setUser(result as User);
                return;
            }
            result = project.menbers.find((v) => v.ID === userId);
            if (result) {
                setRole('member');
                setUser(result as User);
            }
            result = project.pending.find((v) => v.ID === userId);
            if (result) {
                setRole('');
                setUser(result as User);
            }
        }
    }, [projectQuery.isLoading, projectQuery.data?.project, userId]);

    const switchRoleFn = async () => {
        if (!projectQuery.data) return;
        const { project } = projectQuery.data;
        const data: UpdateProjectMutationVariables = {
            id: projectId as string
        };
        if (role === 'member') {
            setRole('admin');
            data.administrators = [
                ...project.administrators.map((v) => v.ID),
                userId
            ];
            data.menbers = [
                ...project.menbers.map((v) => v.ID).filter((v) => v !== userId)
            ];
        } else if (role === 'admin') {
            setRole('member');
            data.administrators = [
                ...project.administrators
                    .map((v) => v.ID)
                    .filter((v) => v !== userId)
            ];
            data.menbers = [...project.menbers.map((v) => v.ID), userId];
        }
        await projectMutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'project',
            { id: projectId } as ProjectQueryVariables
        ]);
    };

    const removeMemberFn = async () => {
        if (!projectQuery.data) return;
        setWaiting(true);
        const { project } = projectQuery.data;
        const data: UpdateProjectMutationVariables = {
            id: projectId as string,
            menbers: [
                ...project.menbers.map((v) => v.ID).filter((v) => v !== userId)
            ],
            pending: [
                ...project.pending.map((v) => v.ID).filter((v) => v !== userId)
            ]
        };
        await projectMutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'project',
            { id: projectId } as ProjectQueryVariables
        ]);
        modal.close();
        setWaiting(false);
    };

    return (
        <div className={`ProjectUserMenu ${className}`}>
            <ScreenSpinner visible={waiting} />
            <UserMenu
                user={user}
                switchRoleFn={switchRoleFn}
                removeMemberFn={removeMemberFn}
                role={role}
                type="project"
            />
        </div>
    );
}
