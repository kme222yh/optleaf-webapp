import './DashboardDetailLayout.scss';

import { useElementSize } from '@/hooks/useElementSize';

import { UserMenu } from '../../organisms/UserMenu';
import { TopNavigationSM } from '../../organisms/TopNavigationSM';
import { ProjectTreeBar } from '../../organisms/ProjectTreeBar';
import { GrayBackground } from '../../organisms/GrayBackground';

export type DashboardDetailLayoutProps = {
    className?: string;
    children: React.ReactNode;
};
DashboardDetailLayout.defaultProps = {
    className: ''
};

export function DashboardDetailLayout({
    className,
    children
}: DashboardDetailLayoutProps) {
    const $layout = useElementSize();
    const $header = useElementSize();

    const mainHeight = $layout.height - $header.height - 70;

    return (
        <div className={`DashboardDetailLayout ${className}`} ref={$layout.ref}>
            <header className="DashboardDetailLayout-header" ref={$header.ref}>
                <TopNavigationSM />
                <ProjectTreeBar />
                <UserMenu />
            </header>

            <main
                className="DashboardDetailLayout-main"
                style={{ height: mainHeight }}
            >
                {children}
            </main>

            <GrayBackground />
        </div>
    );
}
