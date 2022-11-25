import './DashboardDefaultLayout.scss';

import { useElementSize } from '@/hooks/useElementSize';

import { TopNavigation } from '../../organisms/TopNavigation';
import { UserMenu } from '../../organisms/UserMenu';

export type DashboardDefaultLayoutProps = {
    className?: string;
    children: React.ReactNode;
};
DashboardDefaultLayout.defaultProps = {
    className: ''
};

export function DashboardDefaultLayout({
    className,
    children
}: DashboardDefaultLayoutProps) {
    const $layout = useElementSize();
    const $header = useElementSize();

    const mainHeight = $layout.height - $header.height - 60;

    return (
        <div
            className={`DashboardDefaultLayout ${className}`}
            ref={$layout.ref}
        >
            <header className="DashboardDefaultLayout-header" ref={$header.ref}>
                <TopNavigation />
                <UserMenu />
            </header>

            <main
                className="DashboardDefaultLayout-main"
                style={{ height: mainHeight }}
            >
                {children}
            </main>
        </div>
    );
}
