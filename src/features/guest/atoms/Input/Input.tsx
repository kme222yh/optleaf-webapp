import './Input.scoped.scss';

import { UseFormRegisterReturn } from 'react-hook-form';

export type InputProps = {
    className?: string;
    id: string;
    type: string;
    placeholder: string;
    config: UseFormRegisterReturn<string>;
};
Input.defaultProps = {
    className: ''
};

export function Input({
    className,
    id,
    type,
    placeholder,
    config
}: InputProps) {
    return (
        <div className={`Input ${className}`}>
            <input
                className="Input-body"
                id={id}
                type={type}
                placeholder={placeholder}
                {...config}
            />
        </div>
    );
}
