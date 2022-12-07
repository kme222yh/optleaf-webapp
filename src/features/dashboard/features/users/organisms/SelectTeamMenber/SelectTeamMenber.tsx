import './SelectTeamMenber.scoped.scss';
// 一応 チームからユーザーを選択するやつです

import { useState, useEffect, ReactNode } from 'react';
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
import { ScreenSpinner } from '@/features/dashboard/atoms/ScreenSpinner';

import { Team as TeamItem } from '../../atoms/Team';
import { TeamMenbers } from '../TeamMenbers';
import { RoundedButton } from '../../atoms/RoundedButton';

export type SelectTeamMenberProps = {
    className?: string;
};
SelectTeamMenber.defaultProps = {
    className: ''
};

export function SelectTeamMenber({ className }: SelectTeamMenberProps) {
    const [waiting, setWaiting] = useState(false);
    const { id: projectId } = useParams();
    const query = useDashboardTopQuery();
    const projectQuery = useProjectQuery({ id: projectId as string });
    const mutator = useUpdateProjectMutation();
    const queryClient = useQueryClient();
    const [teams, setTeams] = useState<Team[]>([]);
    const [teamId, setTeamId] = useState<string>('');
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
    const modal = useModalManageStore();

    useEffect(() => {
        if (!query.isLoading) {
            if (!query.data) return;
            setTeams(query.data.teams as Team[]);
            if (teamId === '' && query.data.teams.length > 0) {
                setTeamId(query.data!.teams[0].id);
            }
        }
    }, [query.isLoading, query.data?.teams]);

    const selectUser = (id: number) => {
        if (selectedUsers.includes(id)) {
            setSelectedUsers(selectedUsers.filter((val) => val !== id));
        } else {
            setSelectedUsers(selectedUsers.concat(id));
        }
    };

    const $teams: ReactNode[] = [];
    const switchTeam = (newId: string) => {
        setTeamId(newId);
    };
    teams.forEach((team) => {
        $teams.push(
            <li className="SelectTeamMenber-item" key={team.id}>
                <TeamItem
                    name={team.name}
                    onClick={() => switchTeam(team.id)}
                />
            </li>
        );
    });

    const updateProject = async () => {
        if (!projectQuery.data) return;
        setWaiting(true);
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
        setWaiting(false);
        modal.close();
    };

    return (
        <div className={`SelectTeamMenber ${className}`}>
            <ScreenSpinner visible={waiting} />

            <div className="SelectTeamMenber-body">
                <div className="SelectTeamMenber-teams">
                    <ul className="SelectTeamMenber-list">{$teams}</ul>
                </div>
                <div className="SelectTeamMenber-users">
                    <ul className="SelectTeamMenber-list">
                        {teamId ? (
                            <TeamMenbers
                                id={teamId}
                                omit
                                selected={selectedUsers}
                                selector={selectUser}
                            />
                        ) : (
                            ''
                        )}
                    </ul>
                </div>
            </div>
            <div className="SelectTeamMenber-button">
                <RoundedButton text="confirm" onClick={updateProject} />
            </div>
        </div>
    );
}
