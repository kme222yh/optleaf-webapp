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
    let dataSrc = import.meta.env.VITE_DEFAULT_USER_ICON;
    if (src && src !== dataSrc) {
        dataSrc = src;
        if (!src.match('^data:image/'))
            dataSrc = `${import.meta.env.VITE_FILE_URL}/${dataSrc}`;
    }

    return (
        <div className={`UserIcon ${className}`} style={{ height: size }}>
            <div className="UserIcon-body">
                <img className="UserIcon-img" src={dataSrc} alt="user icon" />
            </div>
        </div>
    );
}
