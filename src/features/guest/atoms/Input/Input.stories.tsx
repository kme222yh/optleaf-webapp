import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Input } from './Input';

type T = typeof Input;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Input,
    args: {
        id: 'name',
        type: 'text',
        placeholder: 'This is placeholder.'
    }
} as Meta;

export const Default: Story = {};
