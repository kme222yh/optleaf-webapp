import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Register } from './Register';

type T = typeof Register;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Register,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
