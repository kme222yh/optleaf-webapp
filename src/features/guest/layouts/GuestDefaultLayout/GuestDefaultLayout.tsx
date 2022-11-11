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

            <main className="GuestDefaultLayout-main">{children}</main>

            {/* <header className='GuestDefaultLayout-footer'>
                This is footer.
            </header> */}
        </div>
    );
}
