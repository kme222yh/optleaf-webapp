import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { FormInputText } from './FormInputText';

type T = typeof FormInputText;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: FormInputText,
    args: {
        id: 'name',
        type: 'text',
        placeholder: 'This is placeholder.'
    }
} as Meta;

export const Default: Story = {};
