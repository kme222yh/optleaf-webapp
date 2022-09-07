import '../scss/ProjectListView.scss'

import { useNavigate } from 'react-router-dom'
import { useTeamsQuery, useCreateTeamMutation, Team } from '@/graphql/generated'

import { Loading } from '../layout/Loading'
import { ProjectListItem } from '../components/ProjectListItem'
import { SomeListCreateButton } from '../components/SomeListCreateButton'


export function TeamListView() {
    const teamData = useTeamsQuery();
    const navigation = useNavigate();
    const teamMutator = useCreateTeamMutation();
    const $projects = [];


    let teamLength = 0;
    if (!teamData.isLoading) {
        teamLength = teamData.data!.teams!.length
        for (let i = 0; i < teamLength; i += 1) {
            const team = teamData.data!.teams![i]
            $projects.push(<ProjectListItem key={i} data={team as Team} />)
        }
    }

    const createProject = async () => {
        const team = await teamMutator.mutateAsync({
            name: '新規チーム',
            description: 'ここにチームの詳細を入力してください！',
        });
        navigation(`/team/${String(team.createTeam?.id)}`)
    }

    return (
        <div className="ProjectListView">
            {teamData.isLoading || teamMutator.isLoading ? <Loading /> : null}

            <div className="ProjectListView-body">
                <h2 className="ProjectListView-title">Team List</h2>

                <ul className="ProjectListView-list">
                    <SomeListCreateButton createfunc={createProject} />
                    {$projects}
                </ul>
            </div>
        </div>
    )
}
