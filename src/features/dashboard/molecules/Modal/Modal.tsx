import './Modal.scoped.scss';

import { ReactNode, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export type ModalProps = {
    className?: string;
    children: ReactNode;
    visible: boolean;
};
Modal.defaultProps = {
    className: ''
};

export function Modal({ className, children, visible }: ModalProps) {
    const nodeRef = useRef(null);
    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={visible}
            timeout={300}
            classNames="fade"
        >
            <div className={`Modal ${className}`} ref={nodeRef}>
                {children}
            </div>
        </CSSTransition>
    );
}
