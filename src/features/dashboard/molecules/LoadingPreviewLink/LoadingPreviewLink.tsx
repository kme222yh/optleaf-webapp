import './LoadingPreviewLink.scoped.scss';

export type LoadingPreviewLinkProps = {
    className?: string;
};
LoadingPreviewLink.defaultProps = {
    className: ''
};

export function LoadingPreviewLink({ className }: LoadingPreviewLinkProps) {
    return (
        <div className={`LoadingPreviewLink ${className}`}>
            <div className="LoadingPreviewLink-body">
                <div className="LoadingPreviewLink-name" />
                <div className="LoadingPreviewLink-content" />
            </div>
        </div>
    );
}
