import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectMenbers } from './ProjectMenbers';

type T = typeof ProjectMenbers;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectMenbers,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
