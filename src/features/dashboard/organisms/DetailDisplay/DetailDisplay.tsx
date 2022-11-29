import './DetailDisplay.scoped.scss';

import { useElementSize } from '@/hooks/useElementSize';
import { useParams, useNavigate } from 'react-router-dom';
import {
    useProjectQuery,
} from '@/graphql/generated';

import { DetailTitle } from '../DetailTitle';
import { TaskNumbers } from '../../molecules/TaskNumbers';

export type DetailDisplayProps = {
    className?: string;
};
DetailDisplay.defaultProps = {
    className: ''
};

export function DetailDisplay({ className }: DetailDisplayProps) {
    const $header = useElementSize();
    const $layout = useElementSize();
    const bodySize = $layout.height - $header.height - 60;

    const { id } = useParams();
    const query = useProjectQuery({ id });
    // console.log(id);
    if(!query.isLoading){
        console.log(query.data);
    }

    return (
        <div className={`DetailDisplay ${className}`} ref={$layout.ref}>
            <div className="DetailDisplay-header" ref={$header.ref}>
                <DetailTitle />
            </div>
            <div className="DetailDisplay-body" style={{ height: bodySize }}>
                <ul className="DetailDisplay-info">
                    <li className="DetailDisplay-info-item">
                        <span className="DetailDisplay-info-item-title">
                            Created at
                        </span>
                        <span className="DetailDisplay-info-item-data">
                            2020/12/4
                        </span>
                    </li>
                    <li className="DetailDisplay-info-item">
                        <span className="DetailDisplay-info-item-title">
                            Owner
                        </span>
                        <span className="DetailDisplay-info-item-data">
                            Anonymous
                        </span>
                    </li>
                </ul>
                <div className="DetailDisplay-tasknum">
                    <TaskNumbers tasks={10} completed={5} />
                </div>
                <p className="DetailDisplay-description">
                    これはタスク管理をするためのアプリケーションのプロジェクトです。
                </p>
            </div>
        </div>
    );
}
