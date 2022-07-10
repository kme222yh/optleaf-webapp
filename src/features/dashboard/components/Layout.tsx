import '../scss/layout.scss'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo.svg'

type DashboardLayoutProps = {
    children: React.ReactNode
}

export function Layout({ children }: DashboardLayoutProps) {
    return (
        <div className="DashboardLayout">
            <header className="DashboardLayout-header">
                <div className="DashboardLayout-header-body">
                    <Link to='/' className="DashboardLayout-header-logo" >
                        <img src={logo} alt="OptLeaf" />
                    </Link>
                </div>
            </header>

            <main className="DashboardLayout-body">
                <div className="globalNav">
                    <ul className='globalNav-body'>
                        <li className="globalNav-item"><Link to="/projects">Project</Link></li>
                        <li className="globalNav-item"><Link to="/teams">Team</Link></li>
                        <li className="globalNav-item"><Link to="/tasks">Task</Link></li>
                        <li className="globalNav-item"><Link to="/chat">Chat</Link></li>
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
