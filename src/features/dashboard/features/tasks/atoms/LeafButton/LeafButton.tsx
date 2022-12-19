import './LeafButton.scoped.scss';

import { Leaf } from '@/features/dashboard/svg/Leaf';

export type LeafButtonProps = {
    className?: string;
    disabled?: boolean;
    fill: boolean;
    onClickFn: () => void;
};
LeafButton.defaultProps = {
    className: '',
    disabled: false
};

export function LeafButton({
    className,
    disabled,
    fill,
    onClickFn
}: LeafButtonProps) {
    return (
        <button
            className={`LeafButton ${className}`}
            type="button"
            disabled={disabled}
            onClick={onClickFn}
        >
            <Leaf fill={fill} />
        </button>
    );
}
