import logo from '@/assets/logo.svg'

type DashboardLayoutProps = {
    children: React.ReactNode
}

export function Layout({ children }: DashboardLayoutProps) {
    return (
        <div className="DashboardLayout">
            <header className="DashboardLayout-header">
                <div className="DashboardLayout-header-body">
                    <img className="DashboardLayout-header-logo" src={logo} alt="OptLeaf" />
                </div>
            </header>

            <main className="DashboardLayout-body">{children}</main>
        </div>
    )
}
