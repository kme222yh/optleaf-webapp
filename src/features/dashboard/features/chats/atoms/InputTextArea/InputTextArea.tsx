import './InputTextArea.scoped.scss';

import { UseFormRegisterReturn } from 'react-hook-form';

export type InputTextAreaProps = {
    className?: string;
    id?: string;
    placeholder?: string;
    config: UseFormRegisterReturn<string>;
};
InputTextArea.defaultProps = {
    className: '',
    id: '',
    placeholder: ''
};

export function InputTextArea({
    className,
    id,
    placeholder,
    config
}: InputTextAreaProps) {
    return (
        <textarea
            className={`InputTextArea ${className}`}
            id={id}
            placeholder={placeholder}
            {...config}
        />
    );
}
