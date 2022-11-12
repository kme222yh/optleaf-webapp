import './GuestDefaultLayout.scss';

export type GuestDefaultLayoutProps = {
    children: React.ReactNode;
};

export function GuestDefaultLayout({ children }: GuestDefaultLayoutProps) {
    return (
        <div className="GuestDefaultLayout">
            {/* <header className='GuestDefaultLayout-header'>
                This is header.
            </header> */}

            <main className="GuestDefaultLayout-main">
                <div className="GuestDefaultLayout-main-body">{children}</div>
            </main>

            {/* <header className='GuestDefaultLayout-footer'>
                This is footer.
            </header> */}
        </div>
    );
}
