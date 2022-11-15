import '../scss/ProjectListItem.scss';

import { Link } from 'react-router-dom';
import { Project, Team } from '@/graphql/generated';

type ProjectListItemProps = {
    data: Project | Team;
};
export function ProjectListItem({ data }: ProjectListItemProps) {
    return (
        <li className="ProjectListItem ">
            <Link
                to={`/project/${String(data.id)}`}
                className="ProjectListItem-body"
            >
                <p className="ProjectListItem-title">{data.name}</p>
                <p className="ProjectListItem-description">
                    {data.description}
                </p>
            </Link>
        </li>
    );
}
