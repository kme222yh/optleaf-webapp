import './FormInputSelect.scoped.scss';

import { UseFormRegisterReturn } from 'react-hook-form';

import { TriangleDown } from '../TriangleDown';

type Selection = {
    key: string;
    value: string;
};

export type FormInputSelectProps = {
    className?: string;
    id?: string;
    selection?: Selection[];
    config: UseFormRegisterReturn<string>;
};
FormInputSelect.defaultProps = {
    className: '',
    id: '',
    selection: []
};

export function FormInputSelect({
    className,
    id,
    selection,
    config
}: FormInputSelectProps) {
    const $selections: JSX.Element[] = [];

    if (Array.isArray(selection)) {
        selection.forEach((el) => {
            $selections.push(<option value={el.value}>{el.key}</option>);
        });
    }

    return (
        <div className={`FormInputSelect ${className}`}>
            <select className="FormInputSelect-input" id={id} {...config}>
                {$selections}
            </select>
            <div className="FormInputSelect-icon">
                <TriangleDown />
            </div>
        </div>
    );
}
