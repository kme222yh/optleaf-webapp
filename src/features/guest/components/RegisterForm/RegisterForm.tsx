import './index.scss';

import { FormArea } from '../FormArea';
import { FormInputText } from '../FormInputText';
import { RoundedButton } from '../RoundedButton';

export function RegisterForm() {
    return (
        <FormArea action="POST" className="RegisterForm" onSubmit={() => {}}>
            <FormInputText
                id="name"
                placeholder="user name"
                type="text"
                required
            />
            <FormInputText
                id="email"
                placeholder="email"
                type="email"
                required
            />
            <FormInputText
                id="password"
                placeholder="password"
                type="password"
                required
            />
            <FormInputText
                id="password_confirmed"
                placeholder="confirm password"
                type="password"
                required
            />
            <RoundedButton text="register" collor_reverse />
        </FormArea>
    );
}
