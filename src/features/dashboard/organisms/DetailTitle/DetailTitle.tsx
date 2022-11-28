import './DetailTitle.scoped.scss';

import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from 'react-transition-group';

import { useModalManageStore } from '../../stores/modalManager';

import { OperationDisplay } from '../../molecules/OperationDisplay';

export type DetailTitleProps = {
    className?: string;
};
DetailTitle.defaultProps = {
    className: ''
};

export function DetailTitle({ className }: DetailTitleProps) {
    const nodeRef = useRef(null);
    const modal = useModalManageStore();

    return (
        <div className={`DetailTitle ${className}`}>
            <CSSTransition
                nodeRef={nodeRef}
                in={modal.isOpened('DetailMenu')}
                timeout={300}
                classNames="open"
            >
                <div className="DetailTitle-body" ref={nodeRef}>
                    <div className="DetailTitle-header">
                        <p>Optleaf Project</p>
                        <button
                            className="DetailTitle-gear"
                            type="button"
                            onClick={() => {
                                modal.toggle('DetailMenu');
                            }}
                        >
                            <FontAwesomeIcon icon={faGear} />
                        </button>
                    </div>

                    <ul className="DetailTitle-menu">
                        <li className="DetailTitle-item">
                            <OperationDisplay
                                title="Deligate the project."
                                content="The owner will change to other menber and you will be administrator."
                                button="Deligate"
                                onClick={() => {}}
                            />
                        </li>
                        <li className="DetailTitle-item">
                            <OperationDisplay
                                title="Change access restrictions."
                                content="Currently, this project can be operated by the owner or more."
                                button="Change"
                                onClick={() => {}}
                            />
                        </li>
                        <li className="DetailTitle-item">
                            <OperationDisplay
                                title="Delete the project."
                                content="The project is permanently deleted. This operation cannot be undone."
                                button="Delete"
                                warning
                                onClick={() => {}}
                            />
                        </li>
                    </ul>
                </div>
            </CSSTransition>
        </div>
    );
}
