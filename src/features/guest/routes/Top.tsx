import { Link } from 'react-router-dom'

export function Top() {
    return (
        <div className="authLinks">
            <div className="authLinks-body">
                <ul className="authLinks-list">
                    <li className="authLinks-item">
                        <Link to="/login">ログイン</Link>
                    </li>
                    <li className="authLinks-item">
                        <Link to="/register">新規登録</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
