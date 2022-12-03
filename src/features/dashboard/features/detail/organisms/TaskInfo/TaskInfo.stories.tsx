import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TaskInfo } from './TaskInfo';

type T = typeof TaskInfo;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TaskInfo,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
