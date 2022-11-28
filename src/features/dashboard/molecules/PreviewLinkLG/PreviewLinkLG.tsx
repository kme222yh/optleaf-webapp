import './PreviewLinkLG.scoped.scss';

import { Link } from 'react-router-dom';

import { UserIconRow } from '../UserIconRow';
import { TaskNumbers } from '../TaskNumbers';

export type PreviewLinkLGProps = {
    className?: string;
    name: string;
    content: string;
    to: string;
    icons?: string[];
    nOfTasks?: number;
    nOfCompleted?: number;
};
PreviewLinkLG.defaultProps = {
    className: '',
    icons: [],
    nOfTasks: 0,
    nOfCompleted: 0
};

export function PreviewLinkLG({
    className,
    name,
    content,
    to,
    icons,
    nOfTasks,
    nOfCompleted
}: PreviewLinkLGProps) {
    return (
        <Link className={`PreviewLinkLG ${className}`} to={to}>
            <div className="PreviewLinkLG-body">
                <p className="PreviewLinkLG-name">{name}</p>
                <p className="PreviewLinkLG-content">{content}</p>
                <UserIconRow
                    icons={icons as string[]}
                    maxDisplay={8}
                    height="40px"
                />

                <div className="PreviewLinkLG-task">
                    <TaskNumbers
                        tasks={nOfTasks as number}
                        completed={nOfCompleted as number}
                    />
                </div>
            </div>
        </Link>
    );
}
