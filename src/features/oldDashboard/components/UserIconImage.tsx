import '../scss/UserIconImage.scss';

type UserIconImageProps = {
    imageUrl: string | undefined;
};

export function UserIconImage({ imageUrl }: UserIconImageProps) {
    return (
        <div className="UserIconImage">
            <img
                className="UserIconImage-img"
                src={
                    imageUrl !== ''
                        ? imageUrl
                        : import.meta.env.VITE_DEFAULT_USER_ICON
                }
                alt="user icon"
            />
        </div>
    );
}
