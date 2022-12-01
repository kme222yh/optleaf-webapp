import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { RootTasks } from './RootTasks';

type T = typeof RootTasks;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: RootTasks,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
