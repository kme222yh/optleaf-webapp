import './UserIconSM.scoped.scss';

export type UserIconSMProps = {
    className?: string;
    src?: string | null;
};
UserIconSM.defaultProps = {
    className: '',
    src: import.meta.env.VITE_DEFAULT_USER_ICON
};

export function UserIconSM({className, src}: UserIconSMProps) {
    const defaultSrc = import.meta.env.VITE_DEFAULT_USER_ICON;
    return (
        <div className={`UserIconSM ${className}`}>
                        <img
                className="UserIconSM-img"
                src={src || defaultSrc}
                alt="user icon"
            />
        </div>
    );
}