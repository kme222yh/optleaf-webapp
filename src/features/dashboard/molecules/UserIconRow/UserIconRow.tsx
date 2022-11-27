import './UserIconRow.scoped.scss';

import { UserIcon } from '../../atoms/UserIcon';

export type UserIconRowProps = {
    className?: string;
    icons: string[];
    maxDisplay: number;
    height?: string;
};
UserIconRow.defaultProps = {
    className: '',
    height: '50px'
};

export function UserIconRow({
    className,
    icons,
    maxDisplay,
    height
}: UserIconRowProps) {
    const $icons = [];
    let iconsLength = 0;
    iconsLength = Array.isArray(icons) ? icons.length : 0;
    for (let i = 0; i < iconsLength && i < maxDisplay; i += 1) {
        $icons.push(
            <li className="UserIconRow-item" key={i} style={{ height }}>
                <UserIcon src={(icons as string[])[i]} size="100%" />
            </li>
        );
    }

    const nDif = iconsLength - maxDisplay;

    return (
        <div className={`UserIconRow ${className}`}>
            <ul className="UserIconRow-body">{$icons}</ul>
            {nDif > 0 ? <p className="UserIconRow-num">+{nDif}</p> : ''}
        </div>
    );
}
