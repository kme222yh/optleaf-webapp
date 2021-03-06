import '../scss/top.scss'

import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNoteSticky, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useProjectsQuery, useTeamsQuery, useCreateProjectMutation } from '@/graphql/generated'
import { useAuth } from '@/features/auth'

import { Loading } from '../layout/Loading'


export function Top() {
    const { user } = useAuth()
    const navigation = useNavigate();
    const projectMutator = useCreateProjectMutation();

    const projectData = useProjectsQuery();
    const $projects = [];
    let projectLength = 0;
    if (!projectData.isLoading) {
        projectLength = projectData.data!.projects!.length
        for (let i = 0; i < projectLength; i += 1) {
            const project = projectData.data!.projects![i]
            $projects.push(
                <li className="informatonBoard-projects-item " key={i}>
                    <Link to={`/project/${String(project?.id)}`} className='informatonBoard-projects-item-body'>
                        <p className='informatonBoard-projects-item-title'>{project?.name}</p>
                        <p className='informatonBoard-projects-item-description'>{project?.description}</p>
                    </Link>
                </li>
            )
            if (i === 2) {
                break
            }
        }
    }
    const projectMore = () => {
        if (projectLength > 3) {
            return (
                <Link to="/chat" className='informatonBoard-projects-more'>
                    もっとみる…
                </Link>
            )
        }
        return null;
    }

    const createProject = async () => {
        const project = await projectMutator.mutateAsync({
            name: '新規プロジェクト',
            description: 'ここにプロジェクトの詳細を入力してください！',
        });
        navigation(`/project/${String(project.createProject?.id)}`)
    }

    const teamsData = useTeamsQuery();
    const $teams = [];
    let teamsLength = 0;
    if (!teamsData.isLoading) {
        teamsLength = teamsData.data!.teams!.length
        for (let i = 0; i < teamsLength; i += 1) {
            const team = teamsData.data!.teams![i]
            $teams.push(
                <li className="informatonBoard-projects-item " key={i}>
                    <Link to={`/project/${String(team?.id)}`} className='informatonBoard-projects-item-body'>
                        <p className='informatonBoard-projects-item-title'>{team?.name}</p>
                        <p className='informatonBoard-projects-item-description'>{team?.description}</p>
                    </Link>
                </li>
            )
            if (i === 3) {
                break
            }
        }
    }
    const teamMore = () => {
        if (projectLength > 2) {
            return (
                <Link to="/team" className='informatonBoard-projects-more'>
                    もっとみる…
                </Link>
            )
        }
        return null;
    }

    return (
        <div className="top">
            {projectMutator.isLoading ? <Loading /> : null}

            <div className="top-body">
                <h2 className="top-greeting">こんにちわ！ {user?.name}さん</h2>

                <div className="informatonBoard">
                    <div className="informatonBoard-body">
                        <div className="informatonBoard-projects">
                            <div className="informatonBoard-projects-title"><FontAwesomeIcon className='icon' icon={faNoteSticky} /> <p className='text'>プロジェクト</p></div>
                            <ul className="informatonBoard-projects-list">
                                {$projects}
                                <li className="informatonBoard-projects-item">
                                    <button type='button' className='informatonBoard-projects-item-body create' onClick={createProject}>
                                        <FontAwesomeIcon className='icon' icon={faPlus} />
                                    </button>
                                </li>
                            </ul>
                            {projectMore()}
                        </div>

                        <div className="informatonBoard-teams">
                            <p className="informatonBoard-teams-title">チーム</p>
                            <ul className="informatonBoard-teams-list">
                                {$teams}
                            </ul>
                            {teamMore()}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
