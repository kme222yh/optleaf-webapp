import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Leaf } from './Leaf';

type T = typeof Leaf;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Leaf,
    args: {
        fill: false
    }
} as Meta;

export const Default: Story = {};
