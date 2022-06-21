import { useForm } from 'react-hook-form'

import { useAuth } from '../providers/auth'
import { RegisterCredentials } from '../types'

export function Register() {
    const { user, register } = useAuth()

    const methods = useForm<RegisterCredentials>()

    const isValid = async (data: RegisterCredentials) => {
        const res = await register(data)
        console.log(res)
    }
    const isInValid = (erros: any) => {
        console.log('Fail Register')
    }

    return (
        <div className="authForm">
            <p className="authForm-head">新規登録</p>
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
                <div className="authForm-item">
                    <label htmlFor="password_confirmation">パスワード（確認用）</label>
                    <input
                        id="password_confirmation"
                        type="password"
                        {...methods.register('password_confirmation', { required: 'パ' })}
                    />
                </div>
                <button className="authForm-button" type="submit" name="button">
                    登録
                </button>
            </form>
        </div>
    )
}
