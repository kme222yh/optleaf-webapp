import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TaskChats } from './TaskChats';

type T = typeof TaskChats;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TaskChats,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
