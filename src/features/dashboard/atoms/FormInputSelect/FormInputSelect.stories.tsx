import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { FormInputSelect } from './FormInputSelect';

type T = typeof FormInputSelect;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: FormInputSelect,
    args: {
        selection: [
            { key: 'default', value: 'default' },
            { key: 'choice1', value: 'default' },
            { key: 'choice2', value: 'default' }
        ]
    }
} as Meta;

export const Default: Story = {};
