/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './Messanger.scoped.scss';

// import { useLayoutEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { useMessanger } from '../../hooks/useMessanger';

export type MessangerProps = {
    className?: string;
};
Messanger.defaultProps = {
    className: ''
};

export function Messanger({ className }: MessangerProps) {
    const { queue } = useMessanger();

    // useLayoutEffect(() => {
    //     setInterval(() => {
    //         push('test message', 'success');
    //     }, 4000);
    //     console.log('hoge');
    // }, []);

    return (
        <div className={`Messanger ${className}`}>
            <ul className="Messanger-body">
                <TransitionGroup>
                    {queue.map((v) => (
                        <CSSTransition
                            key={v.key}
                            timeout={300}
                            classNames="fade"
                        >
                            <li
                                className="Messanger-item"
                                onClick={v.deleteHandler}
                            >
                                <p className={`Messanger-text ${v.type}`}>
                                    {v.text}
                                </p>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ul>
        </div>
    );
}
