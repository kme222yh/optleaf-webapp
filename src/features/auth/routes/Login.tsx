import { useForm } from 'react-hook-form'

import { useAuth } from '../providers/auth'
import { LoginCredentials } from '../types'

export function Login() {
    const { user, login, error } = useAuth()

    const methods = useForm<LoginCredentials>()

    const isValid = async (data: LoginCredentials) => {
        await login(data)
    }
    const isInValid = (erros: any) => {
        console.log('Fail Login')
    }

    return (
        <div className="authForm">
            <p className="authForm-head">ログイン</p>
            <form action="POST" className="authForm-body" onSubmit={methods.handleSubmit(isValid, isInValid)}>
                <div className="authForm-item">
                    <label htmlFor="email">メールアドレス</label>
                    <input id="email" type="email" {...methods.register('email', { required: 'emailを入力してください' })} />
                </div>
                <div className="authForm-item">
                    <label htmlFor="password">パスワード</label>
                    <input
                        id="password"
                        type="password"
                        {...methods.register('password', { required: 'パスワードを入力してください' })}
                    />
                </div>
                <button className="authForm-button" type="submit" name="button">
          ログイン
                </button>
            </form>
        </div>
    )
}
