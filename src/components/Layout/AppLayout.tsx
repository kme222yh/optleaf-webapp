import './index.scss';

type AppLayoutProps = {
  children: React.ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
    return (
        <div className="AppLayout">
            <div className="AppLayout-body">
                {children}
            </div>
        </div>
    )
}
