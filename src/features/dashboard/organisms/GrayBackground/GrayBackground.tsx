/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import './GrayBackground.scoped.scss';

import { CSSTransition } from 'react-transition-group';
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useModalManageStore } from '../../stores/modalManager';

export type GrayBackgroundProps = {
    className?: string;
};
GrayBackground.defaultProps = {
    className: ''
};

export function GrayBackground({ className }: GrayBackgroundProps) {
    const nodeRef = useRef(null);
    const modal = useModalManageStore();
    const location = useLocation();

    useEffect(() => {
        modal.close();
    }, [location]);

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={modal.isOpened()}
            timeout={300}
            classNames="open"
        >
            <div
                className={`GrayBackground ${className}`}
                ref={nodeRef}
                onClick={() => modal.close()}
            />
        </CSSTransition>
    );
}
