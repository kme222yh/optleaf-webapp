import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { InputText } from './InputText';

type T = typeof InputText;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: InputText,
    args: {
        label: 'password',
        placeholder: 'placeholder'
    }
} as Meta;

export const Default: Story = {};
