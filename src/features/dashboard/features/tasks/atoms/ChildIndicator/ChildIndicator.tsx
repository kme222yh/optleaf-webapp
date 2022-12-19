/* eslint-disable react/jsx-no-useless-fragment */
import './ChildIndicator.scoped.scss';

import { TriangleRight } from '@/features/dashboard/svg/TriangleRight';

export type ChildIndicatorProps = {
    className?: string;
    visible: boolean;
};
ChildIndicator.defaultProps = {
    className: ''
};

export function ChildIndicator({ className, visible }: ChildIndicatorProps) {
    return (
        <>
            {visible ? (
                <span className={`ChildIndicator ${className}`}>
                    <TriangleRight />
                </span>
            ) : (
                ''
            )}
        </>
    );
}
