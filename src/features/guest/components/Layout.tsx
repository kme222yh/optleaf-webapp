import logo from '@/assets/logo.svg'

type GuestLayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: GuestLayoutProps) {
    return (
        <div className="GuestLayout">
            <header className="GuestLayout-header">
                <div className="GuestLayout-header-body">
                    <img className="GuestLayout-header-logo" src={logo} alt="OptLeaf" />
                </div>
            </header>

            <main className="GuestLayout-body">{children}</main>
        </div>
    )
}
