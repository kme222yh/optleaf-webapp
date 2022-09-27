import '../scss/UserSettingView.scss'

import { useForm } from 'react-hook-form'
import { UserInputData } from '../types'
import { UpdateUserData } from '../api'

export function UserSettingView() {

    const methods = useForm<UserInputData>()

    const isValid = async (data: UserInputData) => {
        await UpdateUserData(data);
        // console.log(res);
        // console.log("res");
    }
    const isInValid = (erros: any) => {
        console.log('Fail Login')
    }

    return (
        <div className="UserSettingView">
            <div className="UserSettingView-body">
                <h2 className="ProjectListView-title">User Setting</h2>


                <form action="POST" className="authForm-body" onSubmit={methods.handleSubmit(isValid, isInValid)}>
                    <div className="authForm-item">
                        <label htmlFor="email">メールアドレス</label>
                        <input id="email" type="email" {...methods.register('email', { required: 'emailを入力してください' })} />
                    </div>
                    <div className="authForm-item">
                        <label htmlFor="name">名前</label>
                        <input
                            id="name"
                            type="text"
                            {...methods.register('name', { required: 'パスワードを入力してください' })}
                        />
                    </div>
                    <div className="authForm-item">
                        <label htmlFor="icon_image">アイコン</label>
                        <input
                            id="icon_image"
                            type="file"
                            {...methods.register('icon_image')}
                        />
                    </div>
                    <button className="authForm-button" type="submit" name="button">
                        更新
                    </button>
                </form>


                <p>ユーザー情報</p>
                <p>パスワード</p>
            </div>
        </div>
    )
}
