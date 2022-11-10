import './index.scss';

import { UseFormRegister, FieldValues } from 'react-hook-form';

export type FormInputTextProps = {
    id: string;
    type: string;
    placeholder?: string;
    warning?: string;
    required?: boolean;
    config: UseFormRegister<FieldValues>;
};
FormInputText.defaultProps = {
    placeholder: '',
    warning: '',
    required: false,
};


export function FormInputText({id, type, placeholder, warning, required, config}: FormInputTextProps) {
    return (
        <div className='FormInputText'>
            <input className='FormInputText-input' id={id} type={type} placeholder={placeholder} required={required} {...config} />
            <span className='FormInputText-warning'>{warning}</span>
        </div>
    );
}