import './UserIcon.scoped.scss';

export type UserIconProps = {
    className?: string;
    src?: string | null;
};
UserIcon.defaultProps = {
    className: '',
    src: import.meta.env.VITE_DEFAULT_USER_ICON
};

export function UserIcon({ className, src }: UserIconProps) {
    const defaultSrc = import.meta.env.VITE_DEFAULT_USER_ICON;
    return (
        <div className={`UserIcon ${className}`}>
            <img
                className="UserIcon-img"
                src={src || defaultSrc}
                alt="user icon"
            />
        </div>
    );
}
