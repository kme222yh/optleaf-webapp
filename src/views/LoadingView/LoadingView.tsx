import './LoadingView.scss';

export type LoadingViewProps = {
    className?: string;
};
LoadingView.defaultProps = {
    className: ''
};

export function LoadingView({ className }: LoadingViewProps) {
    return (
        <div className={`LoadingView ${className}`}>
            <div className="LoadingView-body" />
        </div>
    );
}
