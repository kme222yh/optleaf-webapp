import './Item.scoped.scss';

import { Link } from 'react-router-dom';

import { TriangleRight } from '@/features/dashboard/svg/TriangleRight';
import { Leaf } from '@/features/dashboard/svg/Leaf';

export type ItemProps = {
    className?: string;
    isCompleted: boolean;
    text: string;
    hasChild: boolean;
    to: string;
    onComplete?: () => void;
};
Item.defaultProps = {
    className: '',
    onComplete: () => {}
};

export function Item({
    className,
    isCompleted,
    text,
    to,
    hasChild,
    onComplete
}: ItemProps) {
    return (
        <Link className={`Item ${className} ${isCompleted? 'completed': ''}`} to={to}>
            <button className="Item-leaf" type="button" onClick={onComplete}>
                <Leaf fill={isCompleted} />
            </button>
            <span className="Item-text">{text}</span>
            {hasChild ? (
                <span className="Item-arrow">
                    <TriangleRight />
                </span>
            ) : (
                ''
            )}
        </Link>
    );
}
