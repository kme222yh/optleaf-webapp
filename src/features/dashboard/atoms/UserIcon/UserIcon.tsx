import './UserIcon.scoped.scss';

export type UserIconProps = {
    className?: string;
    src?: string | null;
    size?: string;
};
UserIcon.defaultProps = {
    className: '',
    src: import.meta.env.VITE_DEFAULT_USER_ICON,
    size: '70px'
};

export function UserIcon({ className, src, size }: UserIconProps) {
    const defaultSrc = import.meta.env.VITE_DEFAULT_USER_ICON;
    return (
        <div className={`UserIcon ${className}`} style={{ height: size }}>
            <div className="UserIcon-body">
                <img
                    className="UserIcon-img"
                    src={src || defaultSrc}
                    alt="user icon"
                />
            </div>
        </div>
    );
}
