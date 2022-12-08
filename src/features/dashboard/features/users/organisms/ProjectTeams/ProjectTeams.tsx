/* eslint-disable jsx-a11y/click-events-have-key-events */
import './ProjectTeams.scoped.scss';

import { useState, useEffect, ReactNode, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Team, useProjectQuery } from '@/graphql/generated';
import { useWindowSize } from '@/hooks/useWindowSize';

import { Team as TeamItem } from '../../atoms/Team';
import { TeamMenbers } from '../TeamMenbers';
import { ProjectTeamMenu } from '../ProjectTeamMenu';

export type ProjectTeamsProps = {
    className?: string;
};
ProjectTeams.defaultProps = {
    className: ''
};

export function ProjectTeams({ className }: ProjectTeamsProps) {
    const window = useWindowSize();
    const nodeRef = useRef(null);
    const { id } = useParams();
    const [focusedTeamId, setFocusedTeamId] = useState('');
    const [modalPos, setModalPos] = useState({ x: 0, y: 0 });
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
            <li
                className={`ProjectTeams-item ${
                    teamId === team.id ? 'current' : ''
                }`}
                key={team.id}
                onClick={(e: any) => {
                    openTeamModal(e);
                    setFocusedTeamId(team.id);
                }}
                role="row"
            >
                <TeamItem
                    name={team.name}
                    onClick={() => switchTeam(team.id)}
                />
            </li>
        );
    });

    const openTeamModal = (e: any) => {
        const pos = { x: e.clientX, y: e.clientY - 10 };
        if (window[1] < pos.y + 245) {
            pos.y = window[1] - 245 - 10;
        }
        setModalPos(pos);
    };
    const closeUserModal = () => {
        setFocusedTeamId('');
    };

    return (
        <div className={`ProjectTeams ${className}`}>
            <div className="ProjectTeams-body">
                <div className="ProjectTeams-teams">
                    <ul className="ProjectTeams-list">{$teams}</ul>
                </div>
                <div className="ProjectTeams-users">
                    <ul className="ProjectTeams-list">
                        {teamId ? <TeamMenbers id={teamId} /> : ''}
                    </ul>
                </div>
            </div>

            {query.data?.project.grant.edit ? (
                <CSSTransition
                    nodeRef={nodeRef}
                    in={focusedTeamId !== ''}
                    timeout={300}
                    classNames="fade"
                >
                    <div
                        className="ProjectTeams-teaminfo"
                        onPointerLeave={closeUserModal}
                        style={{ top: modalPos.y, left: modalPos.x }}
                        ref={nodeRef}
                    >
                        <ProjectTeamMenu teamId={focusedTeamId} />
                    </div>
                </CSSTransition>
            ) : (
                ''
            )}
        </div>
    );
}
