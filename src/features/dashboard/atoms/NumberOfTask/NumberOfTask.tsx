import './NumberOfTask.scoped.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { Leaf } from '../../svg/Leaf';

export type NumberOfTaskProps = {
    className?: string;
    fill?: boolean;
    n: number;
};
NumberOfTask.defaultProps = {
    className: '',
    fill: false
};

export function NumberOfTask({ className, fill, n }: NumberOfTaskProps) {
    return (
        <span className={`NumberOfTask ${className}`}>
            <span className="NumberOfTask-svg">
                <Leaf fill={fill} />
            </span>
            <span className="NumberOfTask-cross">
                <FontAwesomeIcon icon={faXmark} />
            </span>
            {n}
        </span>
    );
}
