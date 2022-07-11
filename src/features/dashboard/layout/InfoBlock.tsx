import '../scss/InfoBlock.scss'

import { Loading } from './Loading'

type InfoBlockProps = {
    children: React.ReactNode
    className: string
    isLoading?: boolean
}

InfoBlock.defaultProps = {
    isLoading: false
}

export function InfoBlock({ children, className, isLoading }: InfoBlockProps) {
    return (
        <div className={`infoBlock ${className}`}>
            {isLoading ? <Loading /> : null}
            <div className={`infoBlock-body ${className}-body`}>
                {children}
            </div>
        </div>
    );
}