import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { InputTextArea } from './InputTextArea';

type T = typeof InputTextArea;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: InputTextArea,
    args: {
        id: 'name',
        type: 'text',
        placeholder: 'This is placeholder.'
    }
} as Meta;

export const Default: Story = {};
