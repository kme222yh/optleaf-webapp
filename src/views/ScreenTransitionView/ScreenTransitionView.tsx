import './ScreenTransitionView.scss';

import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useModalManageStore } from '@/features/dashboard/stores/modalManager';

import { LoadingView } from '../LoadingView';

export function ScreenTransitionView() {
    const nodeRef = useRef(null);
    const modal = useModalManageStore();
    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={modal.isOpened('ScreenTransition')}
            timeout={400}
            classNames="fade"
        >
            <div className="ScreenTransitionView" ref={nodeRef}>
                <LoadingView />
            </div>
        </CSSTransition>
    );
}
