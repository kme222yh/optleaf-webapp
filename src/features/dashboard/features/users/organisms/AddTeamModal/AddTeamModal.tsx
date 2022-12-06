import './AddTeamModal.scoped.scss';

import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    ProjectQueryVariables,
    Team,
    UpdateProjectMutationVariables,
    useDashboardTopQuery,
    useProjectQuery,
    useUpdateProjectMutation
} from '@/graphql/generated';
import { useModalManageStore } from '@/features/dashboard/stores/modalManager';

import { RoundedButton } from '../../atoms/RoundedButton';
import { Team as TeamItem } from '../../atoms/Team';

export type AddTeamModalProps = {
    className?: string;
};
AddTeamModal.defaultProps = {
    className: ''
};

export function AddTeamModal({ className }: AddTeamModalProps) {
    const { id: projectId } = useParams();
    const query = useDashboardTopQuery();
    const projectQuery = useProjectQuery({ id: projectId as string });
    const mutator = useUpdateProjectMutation();
    const queryClient = useQueryClient();
    const [teams, setTeams] = useState<Team[]>([]);
    const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
    const modal = useModalManageStore();

    useEffect(() => {
        if (!query.isLoading) {
            setTeams(query.data?.teams as Team[]);
        }
    }, [query.isLoading, query.data?.teams]);

    const $items: ReactNode[] = [];
    const selectTeam = (id: string) => {
        if (selectedTeams.includes(id)) {
            setSelectedTeams(selectedTeams.filter((val) => val !== id));
        } else {
            setSelectedTeams(selectedTeams.concat(id));
        }
    };
    teams.forEach((team) => {
        const isSelected = selectedTeams.includes(team.id);
        $items.push(
            <li
                className={`AddTeamModal-item ${isSelected ? 'selected' : ''}`}
                key={team.id}
            >
                <TeamItem
                    name={team.name}
                    selected={isSelected}
                    onClick={() => selectTeam(team.id)}
                />
            </li>
        );
    });

    const updateProject = async () => {
        if (!projectQuery.data) return;
        const data: UpdateProjectMutationVariables = {
            id: projectId as string,
            teams: [
                ...projectQuery.data.project.teams.map((val) => val.id),
                ...selectedTeams
            ]
        };
        await mutator.mutateAsync(data);
        await queryClient.invalidateQueries([
            'project',
            { id: projectId } as ProjectQueryVariables
        ]);
        modal.close();
    };

    return (
        <div className={`AddTeamModal ${className}`}>
            <div className="AddTeamModal-body">
                <p className="AddTeamModal-title">Add Team</p>
                <div className="AddTeamModal-teams">
                    <ul className="AddTeamModal-list">{$items}</ul>
                </div>
                <div className="AddTeamModal-button">
                    <RoundedButton text="confirm" onClick={updateProject} />
                </div>
            </div>
        </div>
    );
}
