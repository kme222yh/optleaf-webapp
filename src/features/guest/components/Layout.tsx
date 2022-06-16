import logo from '@/assets/logo.svg'

type GuestLayoutProps = {
  children: React.ReactNode
}

const hoge = 'hogehogehoge'

export function Layout({ children }: GuestLayoutProps) {
    return (
        <div className="GuestLayout">
            <div className="GuestLayout-header">
                <div className="GuestLayout-header-body">
                    <img className="GuestLayout-header-logo" src={logo} alt="OptLeaf" />
                </div>
            </div>

            <div className="GuestLayout-body">{children}</div>
        </div>
    )
}
