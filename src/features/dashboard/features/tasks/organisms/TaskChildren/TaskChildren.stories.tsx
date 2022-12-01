import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TaskChildren } from './TaskChildren';

type T = typeof TaskChildren;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TaskChildren,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
