/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import './DashboardTaskView.scss';

import { useElementSize } from '@/hooks/useElementSize';
import { useEffect, useState } from 'react';

import { TaskBrancies } from '../../features/tasks';
import { TaskChats } from '../../features/chats';
import { TaskInfo } from '../../features/detail';

export type DashboardTaskViewProps = {
    className?: string;
};
DashboardTaskView.defaultProps = {
    className: ''
};

export function DashboardTaskView({ className }: DashboardTaskViewProps) {
    const [detailHeight, setDetailHeight] = useState('500px');
    const [chatsHeight, setChatsHeight] = useState('calc(100% - 500px - 25px)');
    const $layout = useElementSize();

    useEffect(() => {
        if ($layout.height < 800) {
            setDetailHeight('calc(100% - 200px - 25px)');
            setChatsHeight('200px');
        } else {
            setDetailHeight('500px');
            setChatsHeight('calc(100% - 500px - 25px)');
        }
    }, [$layout.height]);

    const detailHoverFn = () => {
        if ($layout.height >= 800) return;
        setDetailHeight('calc(100% - 200px - 25px)');
        setChatsHeight('200px');
    };

    const chatsHoverFn = () => {
        if ($layout.height >= 800) return;
        setDetailHeight('200px');
        setChatsHeight('calc(100% - 200px - 25px)');
    };

    return (
        <div className={`DashboardTaskView ${className}`} ref={$layout.ref}>
            <div className="DashboardTaskView-tasks">
                <TaskBrancies />
            </div>
            <div className="DashboardTaskView-info">
                <div
                    className="DashboardTaskView-detail"
                    style={{ height: detailHeight }}
                    onMouseOver={detailHoverFn}
                    onTouchEnd={detailHoverFn}
                >
                    <TaskInfo />
                </div>
                <div
                    className="DashboardTaskView-chats"
                    style={{ height: chatsHeight }}
                    onMouseOver={chatsHoverFn}
                    onTouchEnd={chatsHoverFn}
                >
                    <TaskChats />
                </div>
            </div>
        </div>
    );
}
