import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';

import { tasks } from '@/mocks/data';

import { List } from './List';

type T = typeof List;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: List,
    args: {
        tasks
    }
} as Meta;

export const Default: Story = {};
