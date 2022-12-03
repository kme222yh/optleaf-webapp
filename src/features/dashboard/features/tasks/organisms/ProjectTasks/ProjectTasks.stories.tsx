import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectTasks } from './ProjectTasks';

type T = typeof ProjectTasks;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectTasks,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
