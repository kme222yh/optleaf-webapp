import './ProjectList.scoped.scss';

import { useDashboardTopQuery, Project } from '@/graphql/generated';

import { PreviewLinkLG } from '../../molecules/PreviewLinkLG';
import { LoadingPreviewLink } from '../../molecules/LoadingPreviewLink';

export type ProjectListProps = {
    className?: string;
};
ProjectList.defaultProps = {
    className: ''
};

export function ProjectList({ className }: ProjectListProps) {
    const query = useDashboardTopQuery();

    const $items = [];

    if (query.isLoading) {
        for (let i = 0; i < 6; i += 1) {
            $items.push(
                <li className="ProjectList-item" key={i}>
                    <LoadingPreviewLink />
                </li>
            );
        }
    } else {
        const projects = query.data?.projects;
        let itemsLength = 0;
        itemsLength = Array.isArray(projects) ? projects.length : 0;
        for (let i = 0; i < itemsLength; i += 1) {
            if (i > 3) break;
            const project = (projects as Project[])[i];
            const icons: string[] = [];
            icons.push(project.owner?.icon_image as string);
            if (Array.isArray(project.administrators)) {
                project.administrators.forEach((user) => {
                    icons.push(user?.icon_image as string);
                });
            }
            if (Array.isArray(project.menbers)) {
                project.menbers.forEach((user) => {
                    icons.push(user?.icon_image as string);
                });
            }
            $items.push(
                <li className="ProjectList-item" key={i}>
                    <PreviewLinkLG
                        content={project.description as string}
                        icons={icons}
                        name={project.name as string}
                        to="/"
                        nOfCompleted={10}
                        nOfTasks={5}
                    />
                </li>
            );
        }
    }

    return (
        <div className={`ProjectList ${className}`}>
            <ul className="ProjectList-body">{$items}</ul>
        </div>
    );
}
