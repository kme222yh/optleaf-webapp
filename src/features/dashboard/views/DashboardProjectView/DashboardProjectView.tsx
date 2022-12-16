/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import './DashboardProjectView.scss';

import { useEffect, useState } from 'react';

import { useElementSize } from '@/hooks/useElementSize';

import { ProjectTasks } from '../../features/tasks';
import { ProjectChats } from '../../features/chats';
import { ProjectInfo } from '../../features/detail';
import { ProjectTeamMenberList } from '../../features/users';

export type DashboardProjectViewProps = {
    className?: string;
};
DashboardProjectView.defaultProps = {
    className: ''
};

export function DashboardProjectView({ className }: DashboardProjectViewProps) {
    const [detailHeight, setDetailHeight] = useState('200px');
    const [menbersHeight, setMenbersHeight] = useState(
        'calc(100% - 200px - 25px)'
    );
    const $layout = useElementSize();

    useEffect(() => {
        if ($layout.height < 800) {
            setDetailHeight('calc(100% - 200px - 25px)');
            setMenbersHeight('200px');
        } else {
            setDetailHeight('500px');
            setMenbersHeight('calc(100% - 500px - 25px)');
        }
    }, [$layout.height]);

    const detailHoverFn = () => {
        if ($layout.height >= 800) return;
        setDetailHeight('calc(100% - 200px - 25px)');
        setMenbersHeight('200px');
    };

    const menbersHoverFn = () => {
        if ($layout.height >= 800) return;
        setDetailHeight('200px');
        setMenbersHeight('calc(100% - 200px - 25px)');
    };

    return (
        <div className={`DashboardProjectView ${className}`} ref={$layout.ref}>
            <div className="DashboardProjectView-tasks">
                <ProjectTasks />
            </div>
            <div className="DashboardProjectView-chats">
                <ProjectChats />
            </div>
            <div className="DashboardProjectView-info">
                <div
                    className="DashboardProjectView-detail"
                    style={{ height: detailHeight }}
                    onMouseOver={detailHoverFn}
                    onTouchEnd={detailHoverFn}
                >
                    <ProjectInfo />
                </div>
                <div
                    className="DashboardProjectView-menbers"
                    style={{ height: menbersHeight }}
                    onMouseOver={menbersHoverFn}
                    onTouchEnd={menbersHoverFn}
                >
                    <ProjectTeamMenberList />
                </div>
            </div>
        </div>
    );
}
