import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TriangleDown } from './TriangleDown';

type T = typeof TriangleDown;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TriangleDown,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
