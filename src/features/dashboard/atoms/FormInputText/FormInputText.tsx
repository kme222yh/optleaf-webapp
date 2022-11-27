import './FormInputText.scoped.scss';

import { UseFormRegisterReturn } from 'react-hook-form';

export type FormInputTextProps = {
    className?: string;
    id?: string;
    type: string;
    placeholder?: string;
    config: UseFormRegisterReturn<string>;
};
FormInputText.defaultProps = {
    className: '',
    id: '',
    placeholder: ''
};

export function FormInputText({
    className,
    id,
    type,
    placeholder,
    config
}: FormInputTextProps) {
    return (
        <input
            className={`FormInputText ${className}`}
            id={id}
            type={type}
            placeholder={placeholder}
            {...config}
        />
    );
}
