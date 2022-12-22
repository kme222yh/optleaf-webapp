import './Form.scoped.scss';

import { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import { RoundedButton } from '../../atoms/RoundedButton';
import { WarningText } from '../../atoms/WarningText';
import { ScreenSpinner } from '../../atoms/ScreenSpinner';

export type FormProps = {
    className?: string;
    children: React.ReactNode;

    onSubmitFn: React.FormEventHandler<HTMLFormElement>;
    errText: string;
    buttonText: string;
    isWaiting: boolean;
    disabled: boolean;
};
Form.defaultProps = {
    className: ''
};

export function Form({
    className,
    children,
    onSubmitFn,
    errText,
    buttonText,
    isWaiting,
    disabled
}: FormProps) {
    const nodeRef = useRef(null);
    return (
        <form onSubmit={onSubmitFn} className={`Form ${className}`}>
            <div className="Form-body">{children}</div>
            <div className="Form-warning">
                <WarningText>{errText}</WarningText>
            </div>
            <div className="Form-button">
                <RoundedButton
                    text={buttonText}
                    collor_reverse
                    disabled={disabled}
                />
            </div>
            <CSSTransition
                nodeRef={nodeRef}
                in={isWaiting}
                timeout={300}
                classNames="fade"
            >
                <div className="Form-spinner" ref={nodeRef}>
                    <ScreenSpinner />
                </div>
            </CSSTransition>
        </form>
    );
}
