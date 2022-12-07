import './SelectMenberFromTeam.scoped.scss';

import { ReactNode, useState, useEffect } from 'react';

import { Team } from '@/graphql/generated';

import { RoundedButton } from '../../atoms/RoundedButton';
import { TeamMenbers } from '../../organisms/TeamMenbers';
import { Team as TeamItem } from '../../atoms/Team';

export type SelectMenberFromTeamProps = {
    className?: string;
    teams: Team[];
    selected: number[];
    selectorFn: (id: number) => void;
    updateFn: () => void;
};
SelectMenberFromTeam.defaultProps = {
    className: ''
};

export function SelectMenberFromTeam({
    className,
    teams,
    selected,
    selectorFn,
    updateFn
}: SelectMenberFromTeamProps) {
    const [teamId, setTeamId] = useState<string>('');
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

    useEffect(() => {
        if (teamId === '' && teams.length > 0) {
            setTeamId(teams[0].id);
        }
    }, [teams]);

    return (
        <div className={`SelectMenberFromTeam ${className}`}>
            <div className="SelectMenberFromTeam-body">
                <div className="SelectMenberFromTeam-teams">
                    <ul className="SelectMenberFromTeam-list">{$teams}</ul>
                </div>
                <div className="SelectMenberFromTeam-users">
                    <ul className="SelectMenberFromTeam-list">
                        {teamId ? (
                            <TeamMenbers
                                id={teamId}
                                omit
                                selected={selected}
                                selector={selectorFn}
                            />
                        ) : (
                            ''
                        )}
                    </ul>
                </div>
            </div>
            <div className="SelectMenberFromTeam-button">
                <RoundedButton text="confirm" onClick={updateFn} />
            </div>
        </div>
    );
}
