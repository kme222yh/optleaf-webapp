import './Branchies.scoped.scss';

import { useEffect, useState, ReactNode, useRef } from 'react';
import { useParams } from 'react-router-dom';

import { useTaskQuery } from '@/graphql/generated';

import { Children } from '../Children';
import { useNodeTreeStore } from '../../stores/nodeTree';

export type BranchiesProps = {
    className?: string;
};
Branchies.defaultProps = {
    className: ''
};

export function Branchies() {
    const { id, taskId } = useParams();
    const query = useTaskQuery({
        project_id: id as string,
        id: taskId as string
    });
    const nodeTree = useNodeTreeStore();
    // const $endOfListRef = useRef(null);

    useEffect(() => {
        if (!taskId) {
            nodeTree.set([]);
            return;
        }
        if (query.isLoading) return;
        nodeTree.set(query.data?.task?.tree ?? []);
        // if ($endOfListRef.current) {
        //     /* @ts-ignore */
        //     $endOfListRef.current.scrollIntoView();
        // }
    }, [taskId, query.data?.task?.tree]);

    const $brancies: ReactNode[] = [];
    if (taskId) {
        nodeTree.get().forEach((val, idx, arr) => {
            $brancies.push(
                <li
                    key={val}
                    // ref={idx === arr.length - 1 ? $endOfListRef : null}
                    className={`Branchies-item ${
                        idx === arr.length - 2 ? 'current' : ''
                    }`}
                >
                    <Children projectId={id as string} taskId={val} />
                </li>
            );
        });
    }

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{$brancies}</>;
}
