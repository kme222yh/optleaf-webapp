import '../scss/DashboardLayout.scss'
import { Link, useParams } from 'react-router-dom'

import logo from '@/assets/logo.svg'

import { ProjectPath } from '../components/ProjectPath'

type DashboardLayoutProps = {
    children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    const { projectId } = useParams();

    return (
        <div className="DashboardLayout">
            <header className="DashboardLayout-header">
                <div className="DashboardLayout-header-body">
                    <Link to='/' className="DashboardLayout-header-logo" >
                        <img src={logo} alt="OptLeaf" />
                    </Link>
                    {projectId ? <ProjectPath /> : null}
                </div>
            </header>

            <main className="DashboardLayout-body">
                <div className="globalNav">
                    <ul className='globalNav-body'>
                        <li className="globalNav-item"><Link to="/">DashBoard</Link></li>
                        <li className="globalNav-item"><Link to="/projects">Projects</Link></li>
                        {/* <li className="globalNav-item"><Link to="/teams">Teams</Link></li> */}
                    </ul>
                </div>

                <div className="app">
                    <div className="app-body">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}
