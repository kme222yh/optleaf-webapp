import './ProjectSelectMemFromTeam.scoped.scss';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    Team,
    useProjectQuery,
    useDashboardTopQuery,
    UpdateProjectMutationVariables,
    ProjectQueryVariables,
    useUpdateProjectMutation
} from '@/graphql/generated';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';

import { SelectMenberFromTeam } from '../../molecules/SelectMenberFromTeam';

export type ProjectSelectMemFromTeamProps = {
    className?: string;
    setWaitingFn?: (v: boolean) => void;
};
ProjectSelectMemFromTeam.defaultProps = {
    className: '',
    setWaitingFn: () => {}
};

export function ProjectSelectMemFromTeam({
    className,
    setWaitingFn
}: ProjectSelectMemFromTeamProps) {
    const { id: projectId } = useParams();
    const query = useDashboardTopQuery();
    const projectQuery = useProjectQuery({ id: projectId as string });
    const mutator = useUpdateProjectMutation();
    const queryClient = useQueryClient();
    const [teams, setTeams] = useState<Team[]>([]);
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const modal = useModalManageStore();

    useEffect(() => {
        if (!query.isLoading) {
            if (!query.data) return;
            setTeams(query.data.teams as Team[]);
        }
    }, [query.isLoading, query.data?.teams]);

    const selectorFn = (id: number) => {
        if (selectedUsers.includes(id)) {
            setSelectedUsers(selectedUsers.filter((val) => val !== id));
        } else {
            setSelectedUsers(selectedUsers.concat(id));
        }
    };

    const updateFn = async () => {
        if (!projectQuery.data) return;
        setWaitingFn!(true);
        const data: UpdateProjectMutationVariables = {
            id: projectId as string,
            menbers: [
                ...projectQuery.data.project.menbers.map((val) => val.ID),
                ...selectedUsers
            ]
        };
        await mutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'project',
            { id: projectId } as ProjectQueryVariables
        ]);
        setWaitingFn!(false);
        modal.close();
    };

    return (
        <SelectMenberFromTeam
            className={`ProjectSelectMemFromTeam ${className}`}
            teams={teams}
            selected={selectedUsers}
            selectorFn={selectorFn}
            updateFn={updateFn}
        />
    );
}
