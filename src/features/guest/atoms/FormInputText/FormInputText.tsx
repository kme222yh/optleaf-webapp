import './FormInputText.scoped.scss';

import { UseFormRegisterReturn } from 'react-hook-form';

export type FormInputTextProps = {
    className?: string;
    id: string;
    type: string;
    placeholder?: string;
    warning?: string;
    required?: boolean;
    config: UseFormRegisterReturn<string>;
};
FormInputText.defaultProps = {
    className: '',
    placeholder: '',
    warning: '',
    required: false
};

export function FormInputText({
    className,
    id,
    type,
    placeholder,
    warning,
    required,
    config
}: FormInputTextProps) {
    return (
        <div className={`FormInputText ${className}`}>
            <input
                className="FormInputText-input"
                id={id}
                type={type}
                placeholder={placeholder}
                required={required}
                {...config}
            />
            <span className="FormInputText-warning">{warning}</span>
        </div>
    );
}
