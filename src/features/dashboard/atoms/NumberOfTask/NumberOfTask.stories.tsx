import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { NumberOfTask } from './NumberOfTask';

type T = typeof NumberOfTask;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: NumberOfTask,
    args: {
        fill: false,
        n: 10
    }
} as Meta;

export const Default: Story = {};
