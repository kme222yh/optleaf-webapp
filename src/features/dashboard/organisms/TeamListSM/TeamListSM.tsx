import './TeamListSM.scoped.scss';

import { useDashboardTopQuery, Team } from '@/graphql/generated';

import { PreviewLink } from '../../molecules/PreviewLink';
import { PlusButtonSM } from '../../atoms/PlusButtonSM';

export type TeamListSMProps = {
    className?: string;
    height?: string;
};
TeamListSM.defaultProps = {
    className: '',
    height: '500px'
};

export function TeamListSM({className, height}: TeamListSMProps) {
    const query = useDashboardTopQuery();

    const teams = query.isLoading ? []: query.data?.teams;
    const $items = [];
    let itemsLength = 0;
    itemsLength = Array.isArray(teams) ? teams.length: 0;
    for (let i = 0; i < itemsLength; i += 1) {
        if(i>2)break;
        const team = (teams as Team[])[i];
        const icons: string[] = [];
        icons.push(team.owner?.icon_image as string);
        if(Array.isArray(team.administrators)){
            team.administrators.forEach(user => {
                icons.push(user?.icon_image as string);
            });
        }
        if(Array.isArray(team.menbers)){
            team.menbers.forEach(user => {
                icons.push(user?.icon_image as string);
            });
        }
        $items.push(
            <li className="TeamListSM-item" key={i}>
                <PreviewLink
                    content={team.description as string}
                    icons={icons}
                    name={team.name as string}
                    to="/"
                />
            </li>
        );
    }
    return (
        <div className={`TeamListSM ${className}`} style={{ height }}>
            <ul className="TeamListSM-body">
                {$items}
                <li className="TeamListSM-item">
                    <PlusButtonSM onClick={() => {}} />
                </li>
            </ul>
        </div>
    );
}