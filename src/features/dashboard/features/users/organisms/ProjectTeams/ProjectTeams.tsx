import './ProjectTeams.scoped.scss';

import { useState, useEffect, ReactNode } from 'react';
import { useParams } from 'react-router-dom';

import { Team, useProjectQuery } from '@/graphql/generated';

import { Team as TeamItem } from '../../atoms/Team';
import { TeamMenbers } from '../TeamMenbers';

export type ProjectTeamsProps = {
    className?: string;
};
ProjectTeams.defaultProps = {
    className: ''
};

export function ProjectTeams({ className }: ProjectTeamsProps) {
    const { id } = useParams();
    const query = useProjectQuery({ id: id as string });
    const [teams, setTeams] = useState<Team[]>([]);
    const [teamId, setTeamId] = useState<string>('');

    useEffect(() => {
        if (!query.isLoading) {
            if (!query.data) return;
            setTeams(query.data.project.teams as Team[]);
            if (teamId === '' && query.data.project.teams.length > 0) {
                setTeamId(query.data!.project.teams[0].id);
            }
        }
    }, [query.isLoading, query.data?.project]);

    const $teams: ReactNode[] = [];
    const switchTeam = (newId: string) => {
        setTeamId(newId);
    };
    teams.forEach((team) => {
        $teams.push(
            <li className="ProjectTeams-item" key={team.id}>
                <TeamItem
                    name={team.name}
                    onClick={() => switchTeam(team.id)}
                />
            </li>
        );
    });

    return (
        <div className={`ProjectTeams ${className}`}>
            <div className="ProjectTeams-body">
                <div className="ProjectTeams-teams">
                    <ul className="ProjectTeams-list">{$teams}</ul>
                </div>
                <div className="ProjectTeams-users">
                    <ul className="ProjectTeams-list">
                        {teamId ? <TeamMenbers id={teamId} omit /> : ''}
                    </ul>
                </div>
            </div>
        </div>
    );
}
