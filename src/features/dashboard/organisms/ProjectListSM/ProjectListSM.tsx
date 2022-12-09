import './ProjectListSM.scoped.scss';

import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import {
    useDashboardTopQuery,
    Project,
    useCreateProjectMutation
} from '@/graphql/generated';
import { useModalManageStore } from '../../stores/modalManager';

import { PreviewLink } from '../../molecules/PreviewLink';
import { PlusButtonSM } from '../../atoms/PlusButtonSM';
import { LoadingPreviewLink } from '../../molecules/LoadingPreviewLink';
import { useMessanger } from '../../hooks/useMessanger';

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
    const navigator = useNavigate();
    const modal = useModalManageStore();
    const mutator = useCreateProjectMutation();
    const queryQrient = useQueryClient();
    const messanger = useMessanger();

    const createProject = async () => {
        modal.open('ScreenTransition');
        try {
            const result = await mutator.mutateAsync({
                name: 'New Project',
                description: 'This is new project.'
            });
            await queryQrient.resetQueries(['dashboardTop']);
            navigator(`/project/${result.createProject?.id}`);
            messanger.push('New project was created.', 'success');
        } catch (error) {
            messanger.push('Failed to create project.', 'warning');
        }
        modal.close();
    };

    const $items = [];

    if (query.isLoading) {
        for (let i = 0; i < 4; i += 1) {
            $items.push(
                <li className="ProjectListSM-item" key={i}>
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
                <li className="ProjectListSM-item" key={i}>
                    <PreviewLink
                        content={project.description as string}
                        icons={icons}
                        name={project.name as string}
                        to={`/project/${project.id}`}
                    />
                </li>
            );
        }
        $items.push(
            <li className="ProjectListSM-item" key={itemsLength}>
                <PlusButtonSM onClick={createProject} />
            </li>
        );
    }

    return (
        <div className={`ProjectListSM ${className}`} style={{ height }}>
            <ul className="ProjectListSM-body">{$items}</ul>
        </div>
    );
}
