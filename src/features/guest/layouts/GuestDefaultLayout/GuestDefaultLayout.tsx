import './GuestDefaultLayout.scss';

export type GuestDefaultLayoutProps = {
    children: React.ReactNode;
};

export function GuestDefaultLayout({ children }: GuestDefaultLayoutProps) {
    return (
        <div className="GuestDefaultLayout">
            <main className="GuestDefaultLayout-main">
                <div className="GuestDefaultLayout-main-body">{children}</div>
            </main>
        </div>
    );
}
