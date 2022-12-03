import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TaskDangerMenu } from './TaskDangerMenu';

type T = typeof TaskDangerMenu;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TaskDangerMenu,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
