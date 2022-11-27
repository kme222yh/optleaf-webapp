import './SearchForm.scoped.scss';

import { UseFormRegisterReturn } from 'react-hook-form';

import { FormInputSelect } from '../../atoms/FormInputSelect';
import { FormInputText } from '../../atoms/FormInputText';
import { SearchButton } from '../../atoms/SearchButton';

export type SearchFormProps = {
    className?: string;
};
SearchForm.defaultProps = {
    className: ''
};

export function SearchForm({ className }: SearchFormProps) {
    return (
        <div className={`SearchForm ${className}`}>
            <div className="SearchForm-body">
                <div className="SearchForm-select">
                    <FormInputSelect
                        selection={[{ key: 'empty', value: '' }]}
                        config={{} as UseFormRegisterReturn<string>}
                    />
                </div>
                <div className="SearchForm-text">
                    <FormInputText
                        placeholder="Search..."
                        type="text"
                        config={{} as UseFormRegisterReturn<string>}
                    />
                </div>
                <div className="SearchForm-button">
                    <SearchButton />
                </div>
            </div>
        </div>
    );
}
