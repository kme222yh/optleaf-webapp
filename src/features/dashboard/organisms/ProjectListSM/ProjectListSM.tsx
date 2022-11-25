import './ProjectListSM.scoped.scss';

import { useDashboardTopQuery, Project } from '@/graphql/generated';

import { PreviewLink } from '../../molecules/PreviewLink';
import { PlusButtonSM } from '../../atoms/PlusButtonSM';

export type ProjectListSMProps = {
    className?: string;
    height?: string;
};
ProjectListSM.defaultProps = {
    className: '',
    height: '500px'
};

export function ProjectListSM({ className, height }: ProjectListSMProps) {
    const query = useDashboardTopQuery();

    const projects = query.isLoading ? []: query.data?.projects;
    const $items = [];
    let itemsLength = 0;
    itemsLength = Array.isArray(projects) ? projects.length: 0;
    for (let i = 0; i < itemsLength; i += 1) {
        if(i>3)break;
        const project = (projects as Project[])[i];
        const icons: string[] = [];
        icons.push(project.owner?.icon_image as string);
        if(Array.isArray(project.administrators)){
            project.administrators.forEach(user => {
                icons.push(user?.icon_image as string);
            });
        }
        if(Array.isArray(project.menbers)){
            project.menbers.forEach(user => {
                icons.push(user?.icon_image as string);
            });
        }
        $items.push(
            <li className="ProjectListSM-item" key={i}>
                <PreviewLink
                    content={project.description as string}
                    icons={icons}
                    name={project.name as string}
                    to="/"
                />
            </li>
        );
    }

    return (
        <div className={`ProjectListSM ${className}`} style={{ height }}>
            <ul className="ProjectListSM-body">
                {$items}
                <li className="ProjectListSM-item">
                    <PlusButtonSM onClick={() => {}} />
                </li>
            </ul>
        </div>
    );
}
