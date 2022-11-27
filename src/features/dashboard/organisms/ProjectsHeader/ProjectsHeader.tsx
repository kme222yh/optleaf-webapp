import './ProjectsHeader.scoped.scss';

import { SearchForm } from '../SearchForm';
import { RoundedButton } from '../../atoms/RoundedButton';

export type ProjectsHeaderProps = {
    className?: string;
};
ProjectsHeader.defaultProps = {
    className: ''
};

export function ProjectsHeader({ className }: ProjectsHeaderProps) {
    return (
        <div className={`ProjectsHeader ${className}`}>
            <div className="ProjectsHeader-left">
                <RoundedButton text="Create Project" />
            </div>
            <div className="ProjectsHeader-right">
                <SearchForm />
            </div>
        </div>
    );
}
