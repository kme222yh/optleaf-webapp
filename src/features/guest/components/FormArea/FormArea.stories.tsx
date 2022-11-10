import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { FormArea } from './FormArea';

type T = typeof FormArea;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: FormArea,
    args: {
        children: <p>Form Area</p>,
        action: 'post'
    }
} as Meta;

export const Default: Story = {};
