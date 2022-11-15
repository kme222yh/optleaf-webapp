/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import '../scss/UserSettingView.scss';

import { axios } from '@/lib/axios';
import { User } from '@/types/auth';
import { useForm } from 'react-hook-form';
import { useAuth } from '@/providers/auth';
import { UserInputData } from '../types';
import { UpdateUserData } from '../api';
import { Loading } from '../layout/Loading';

async function deleteUser(): Promise<User> {
    return axios.delete('/user/me');
}

export function UserSettingView() {
    const { logout } = useAuth();

    const methods = useForm<UserInputData>();

    const isValid = async (data: UserInputData) => {
        await UpdateUserData(data);
        methods.reset();
    };

    const deleteUserUser = async () => {
        if (window.confirm('本当にユーザーを削除しますか？')) {
            await deleteUser();
            await logout();
        }
    };

    return (
        <div className="UserSettingView">
            {methods.formState.isSubmitting ? <Loading /> : null}

            <div className="UserSettingView-body">
                <h2 className="ProjectListView-title">ユーザー設定</h2>
                <form
                    action="POST"
                    className="authForm-body"
                    onSubmit={methods.handleSubmit(isValid)}
                >
                    <div className="authForm-item">
                        <label htmlFor="email">メールアドレス</label>
                        <input
                            id="email"
                            type="email"
                            {...methods.register('email')}
                        />
                    </div>
                    <div className="authForm-item">
                        <label htmlFor="name">名前</label>
                        <input
                            id="name"
                            type="text"
                            {...methods.register('name')}
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
                    <div className="authForm-item">
                        <label htmlFor="password">パスワード</label>
                        <input
                            id="password"
                            type="password"
                            {...methods.register('password')}
                        />
                    </div>
                    <div className="authForm-item">
                        <label htmlFor="password_confirmed">
                            パスワード(確認)
                        </label>
                        <input
                            id="password_confirmed"
                            type="password"
                            {...methods.register('password_confirmed')}
                        />
                    </div>
                    <button
                        className="authForm-button"
                        type="submit"
                        name="button"
                    >
                        更新
                    </button>
                </form>

                <h2 className="ProjectListView-title">ユーザーの削除</h2>
                <button
                    className="authForm-button delete"
                    type="button"
                    name="delete"
                    onClick={deleteUserUser}
                    onKeyDown={deleteUserUser}
                >
                    削除
                </button>
            </div>
        </div>
    );
}
