import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { FormRow } from './FormRow';

type T = typeof FormRow;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: FormRow,
    args: {
        id: 'name',
        type: 'text',
        placeholder: 'This is placeholder.',
        warning: 'Warning text.'
    }
} as Meta;

export const Default: Story = {};
