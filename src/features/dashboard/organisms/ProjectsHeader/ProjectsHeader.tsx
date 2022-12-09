import './ProjectsHeader.scoped.scss';

import { useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';

import { useCreateProjectMutation } from '@/graphql/generated';
import { useModalManageStore } from '../../stores/modalManager';

import { SearchForm } from '../SearchForm';
import { RoundedButton } from '../../atoms/RoundedButton';
import { useMessanger } from '../../hooks/useMessanger';

export type ProjectsHeaderProps = {
    className?: string;
};
ProjectsHeader.defaultProps = {
    className: ''
};

export function ProjectsHeader({ className }: ProjectsHeaderProps) {
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

    return (
        <div className={`ProjectsHeader ${className}`}>
            <div className="ProjectsHeader-left">
                <RoundedButton text="Create Project" onClick={createProject} />
            </div>
            <div className="ProjectsHeader-right">
                <SearchForm />
            </div>
        </div>
    );
}
