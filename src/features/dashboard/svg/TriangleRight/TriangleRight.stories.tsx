import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TriangleRight } from './TriangleRight';

type T = typeof TriangleRight;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TriangleRight,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
