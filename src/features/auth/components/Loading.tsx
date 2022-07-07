import '../scss/loading.scss'

export function Loading() {
    /* eslint-disable */
    return (
        <div className="authLoading">
            <div className="authLoading-body">
                <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
    /* eslint-enable */
}
