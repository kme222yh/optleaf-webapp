import '../scss/UserIconImage.scss'

type UserIconImageProps = {
    imageUrl: string | undefined
}

export function UserIconImage({imageUrl}: UserIconImageProps) {

    return (
        <div className='UserIconImage'>
            <img className='UserIconImage-img' src={imageUrl !== "" ? imageUrl : process.env.REACT_APP_DEFAULT_USER_ICON as string} alt="user icon" />
        </div>
    )

}