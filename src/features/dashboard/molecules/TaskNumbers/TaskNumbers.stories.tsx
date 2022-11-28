import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TaskNumbers } from './TaskNumbers';

type T = typeof TaskNumbers;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TaskNumbers,
    args: {
        tasks: 10,
        completed: 10
    }
} as Meta;

export const Default: Story = {};
