import './ProjectTeamMenu.scoped.scss';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    ProjectQueryVariables,
    Team,
    UpdateProjectMutationVariables,
    useProjectQuery,
    useTeamQuery,
    useUpdateProjectMutation
} from '@/graphql/generated';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';
import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';

import { TeamMenu } from '../../molecules/TeamMenu';

export type ProjectTeamMenuProps = {
    className?: string;
    teamId: string;
};
ProjectTeamMenu.defaultProps = {
    className: ''
};

export function ProjectTeamMenu({ className, teamId }: ProjectTeamMenuProps) {
    const { id: projectId } = useParams();
    const projectQuery = useProjectQuery({ id: projectId as string });
    const teamQuery = useTeamQuery({ id: teamId });
    const projectMutator = useUpdateProjectMutation();
    const queryClient = useQueryClient();
    const modal = useModalManageStore();
    const [waiting, setWaiting] = useState(false);
    const [team, setTeam] = useState<Team>({
        name: '',
        description: ''
    } as Team);

    useEffect(() => {
        if (teamQuery.isLoading) return;
        if (!teamQuery.data) return;
        setTeam(teamQuery.data.team as Team);
    }, [teamQuery.isLoading, teamQuery.data?.team, teamId]);

    const removeFn = async () => {
        if (!projectQuery.data) return;
        setWaiting(true);
        const { project } = projectQuery.data;
        const data: UpdateProjectMutationVariables = {
            id: projectId as string,
            teams: [
                ...project.teams.map((v) => v.id).filter((v) => v !== teamId)
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
        <div className={`ProjectTeamMenu ${className}`}>
            <ScreenSpinner visible={waiting} />
            <TeamMenu
                name={team.name}
                description={team.description}
                removeFn={removeFn}
            />
        </div>
    );
}
