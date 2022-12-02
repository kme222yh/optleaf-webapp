import './ProjectsHeader.scoped.scss';

import { useNavigate } from 'react-router-dom';

import { useCreateProjectMutation } from '@/graphql/generated';
import { useModalManageStore } from '../../stores/modalManager';

import { SearchForm } from '../SearchForm';
import { RoundedButton } from '../../atoms/RoundedButton';

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
    const createProject = async () => {
        modal.open('ScreenTransition');
        const result = await mutator.mutateAsync({
            name: 'New Project',
            description: 'This is new project.'
        });
        // await queryQrient.resetQueries(['dashboardTop']);
        navigator(`/project/${result.createProject?.id}`);
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
