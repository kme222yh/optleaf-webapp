import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';

import { TaskList } from './TaskList';

type T = typeof TaskList;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TaskList,
    args: {
        // add props here !!
    },
} as Meta;

export const Default: Story = {};
