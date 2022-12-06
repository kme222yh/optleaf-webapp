import './ScreenSpinner.scoped.scss';

import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

export type ScreenSpinnerProps = {
    className?: string;
    visible: boolean;
};
ScreenSpinner.defaultProps = {
    className: ''
};

export function ScreenSpinner({ className, visible }: ScreenSpinnerProps) {
    const nodeRef = useRef(null);
    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={visible}
            timeout={300}
            classNames="fade"
        >
            <div className={`ScreenSpinner ${className}`} ref={nodeRef}>
                <div className="ScreenSpinner-body">
                    <div className="lds-ellipsis">
                        <div />
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
}
