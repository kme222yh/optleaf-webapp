import './FormRow.scoped.scss';

import { UseFormRegisterReturn } from 'react-hook-form';

import { Input } from '../../atoms/Input';
import { WarningText } from '../../atoms/WarningText';

export type FormRowProps = {
    className?: string;
    id: string;
    type: string;
    placeholder: string;
    warning: string;
    config: UseFormRegisterReturn<string>;
};
FormRow.defaultProps = {
    className: ''
};

export function FormRow({
    className,
    id,
    type,
    placeholder,
    warning,
    config
}: FormRowProps) {
    return (
        <div className={`FormRow ${className}`}>
            <Input
                id={id}
                placeholder={placeholder}
                type={type}
                config={config}
            />
            <span className="FormRow-warning">
                <WarningText>{warning}</WarningText>
            </span>
        </div>
    );
}
