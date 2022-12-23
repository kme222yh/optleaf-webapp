import './Spinner.scoped.scss';

export type SpinnerProps = {
    className?: string;
};
Spinner.defaultProps = {
    className: ''
};

export function Spinner({ className }: SpinnerProps) {
    /* eslint-disable */
    return (
        <div className={`Spinner ${className}`}>
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
