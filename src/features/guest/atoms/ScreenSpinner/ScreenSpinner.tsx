import './ScreenSpinner.scoped.scss';

import { LegacyRef } from 'react';

export type ScreenSpinnerProps = {
    className?: string;
    nodeRef?: LegacyRef<HTMLDivElement> | undefined;
};
ScreenSpinner.defaultProps = {
    className: '',
    nodeRef: undefined
};

export function ScreenSpinner({ className, nodeRef }: ScreenSpinnerProps) {
    /* eslint-disable */
    return (
        <div className={`ScreenSpinner ${className}`} ref={nodeRef}>
            <div className="ScreenSpinner-body">
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
    /* eslint-enable */
}
