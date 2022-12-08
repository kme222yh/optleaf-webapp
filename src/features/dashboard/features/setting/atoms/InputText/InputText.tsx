import './InputText.scoped.scss';

import { UseFormRegisterReturn } from 'react-hook-form';

export type InputTextProps = {
    className?: string;
    id?: string;
    type?: string;
    placeholder?: string;
    config: UseFormRegisterReturn<string>;
    label: string;
};
InputText.defaultProps = {
    className: '',
    id: '',
    type: 'text',
    placeholder: ''
};

export function InputText({
    className,
    id,
    type,
    placeholder,
    config,
    label
}: InputTextProps) {
    return (
        <div className={`InputText ${className}`}>
            <label className="InputText-label" htmlFor={id}>
                {label}
            </label>
            <input
                className="InputText-input"
                id={id}
                type={type}
                placeholder={placeholder}
                {...config}
            />
        </div>
    );
}
