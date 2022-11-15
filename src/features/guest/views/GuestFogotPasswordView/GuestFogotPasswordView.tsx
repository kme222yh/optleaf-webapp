import './GuestFogotPasswordView.scss';

export type GuestFogotPasswordViewProps = {
    className?: string;
};
GuestFogotPasswordView.defaultProps = {
    className: ''
};

export function GuestFogotPasswordView({
    className
}: GuestFogotPasswordViewProps) {
    return (
        <div className={`GuestFogotPasswordView ${className}`}>
            <div className="GuestFogotPasswordView-body">
                This is GuestFogotPasswordView View.
            </div>
        </div>
    );
}
