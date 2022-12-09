import './DashboardSettingLayout.scss';

import { useElementSize } from '@/hooks/useElementSize';

import { TopNavigation } from '../../organisms/TopNavigation';
import { UserMenu } from '../../organisms/UserMenu';
import { GrayBackground } from '../../organisms/GrayBackground';
import { SideNavigator } from '../../features/setting';

export type DashboardSettingLayoutProps = {
    className?: string;
    children: React.ReactNode;
};
DashboardSettingLayout.defaultProps = {
    className: ''
};

export function DashboardSettingLayout({
    className,
    children
}: DashboardSettingLayoutProps) {
    const $layout = useElementSize();
    const $header = useElementSize();

    const mainHeight = $layout.height - $header.height - 70;

    return (
        <div
            className={`DashboardSettingLayout ${className}`}
            ref={$layout.ref}
        >
            <header className="DashboardSettingLayout-header" ref={$header.ref}>
                <TopNavigation />
                <UserMenu />
            </header>

            <main
                className="DashboardSettingLayout-main"
                style={{ height: mainHeight }}
            >
                <div className="DashboardSettingLayout-side">
                    <SideNavigator />
                </div>
                <div className="DashboardSettingLayout-center">{children}</div>
            </main>

            <GrayBackground />
        </div>
    );
}
