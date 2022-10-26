import '../scss/UserSettingView.scss'

import { useForm } from 'react-hook-form'
import { UserInputData } from '../types'
import { UpdateUserData } from '../api'
import { Loading } from '../layout/Loading'

export function UserSettingView() {

    const methods = useForm<UserInputData>()

    const isValid = async (data: UserInputData) => {
        await UpdateUserData(data);
        methods.reset();
    }
    const isInValid = (erros: any) => {
        console.log('失敗しました')
    }

    return (
        <div className="UserSettingView">
            {methods.formState.isSubmitting ? <Loading /> : null}

            <div className="UserSettingView-body">
                <h2 className="ProjectListView-title">User Setting</h2>


                <form action="POST" className="authForm-body" onSubmit={methods.handleSubmit(isValid, isInValid)}>
                    <div className="authForm-item">
                        <label htmlFor="email">メールアドレス</label>
                        <input id="email" type="email" {...methods.register('email')} />
                    </div>
                    <div className="authForm-item">
                        <label htmlFor="name">名前</label>
                        <input id="name" type="text" {...methods.register('name')} />
                    </div>
                    <div className="authForm-item">
                        <label htmlFor="icon_image">アイコン</label>
                        <input id="icon_image" type="file" {...methods.register('icon_image')} />
                    </div>
                    <div className="authForm-item">
                        <label htmlFor="password">パスワード</label>
                        <input id="password" type="password" {...methods.register('password')} />
                    </div>
                    <div className="authForm-item">
                        <label htmlFor="password_confirmed">パスワード(確認)</label>
                        <input id="password_confirmed" type="password" {...methods.register('password_confirmed')} />
                    </div>
                    <button className="authForm-button" type="submit" name="button">
                        更新
                    </button>
                </form>
            </div>
        </div>
    )
}
