import './TeamsList.scoped.scss';

import { useDashboardTopQuery, Team } from '@/graphql/generated';

import { PreviewLinkLG } from '../../molecules/PreviewLinkLG';
import { LoadingPreviewLink } from '../../molecules/LoadingPreviewLink';

export type TeamsListProps = {
    className?: string;
};
TeamsList.defaultProps = {
    className: ''
};

export function TeamsList({ className }: TeamsListProps) {
    const query = useDashboardTopQuery();

    const $items = [];

    if (query.isLoading) {
        for (let i = 0; i < 6; i += 1) {
            $items.push(
                <li className="TeamsList-item" key={i}>
                    <LoadingPreviewLink />
                </li>
            );
        }
    } else {
        const teams = query.data?.teams;
        let itemsLength = 0;
        itemsLength = Array.isArray(teams) ? teams.length : 0;
        for (let i = 0; i < itemsLength; i += 1) {
            if (i > 3) break;
            const team = (teams as Team[])[i];
            const icons: string[] = [];
            icons.push(team.owner?.icon_image as string);
            if (Array.isArray(team.administrators)) {
                team.administrators.forEach((user) => {
                    icons.push(user?.icon_image as string);
                });
            }
            if (Array.isArray(team.menbers)) {
                team.menbers.forEach((user) => {
                    icons.push(user?.icon_image as string);
                });
            }
            $items.push(
                <li className="TeamsList-item" key={i}>
                    <PreviewLinkLG
                        content={team.description as string}
                        icons={icons}
                        name={team.name as string}
                        to="/"
                    />
                </li>
            );
        }
    }
    return (
        <div className={`TeamsList ${className}`}>
            <ul className="TeamsList-body">{$items}</ul>
        </div>
    );
}
