import './InfoTitleWrapper.scoped.scss';

import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

import { useElementSize } from '@/hooks/useElementSize';

import { useModalManageStore } from '../../../../stores/modalManager';

export type InfoTitleWrapperProps = {
    className?: string;
    title: React.ReactNode;
    menu: React.ReactNode;
    displayMenu?: boolean;
};
InfoTitleWrapper.defaultProps = {
    className: '',
    displayMenu: false
};

export function InfoTitleWrapper({
    className,
    menu,
    title,
    displayMenu
}: InfoTitleWrapperProps) {
    const nodeRef = useRef(null);
    const modal = useModalManageStore();

    const $header = useElementSize();
    const $menu = useElementSize();
    const bodyHeight = $header.height + $menu.height + 8;

    return (
        <div className={`InfoTitleWrapper ${className}`}>
            <CSSTransition
                nodeRef={nodeRef}
                in={modal.isClosed('DetailMenu')}
                timeout={300}
                classNames="close"
                appear
            >
                <div
                    className="InfoTitleWrapper-body"
                    style={{ height: bodyHeight }}
                    ref={nodeRef}
                >
                    <div className="InfoTitleWrapper-header" ref={$header.ref}>
                        <div className="InfoTitleWrapper-title">{title}</div>
                        {displayMenu ? (
                            <button
                                className="InfoTitleWrapper-gear"
                                type="button"
                                onClick={() => {
                                    modal.toggle('DetailMenu');
                                }}
                            >
                                <FontAwesomeIcon icon={faGear} />
                            </button>
                        ) : (
                            ''
                        )}
                    </div>
                    {displayMenu ? (
                        <div className="InfoTitleWrapper-menu" ref={$menu.ref}>
                            {menu}
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </CSSTransition>
        </div>
    );
}
