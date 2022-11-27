import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectList } from './ProjectList';

type T = typeof ProjectList;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectList,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
