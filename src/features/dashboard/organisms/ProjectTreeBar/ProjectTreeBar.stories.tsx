import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectTreeBar } from './ProjectTreeBar';

type T = typeof ProjectTreeBar;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectTreeBar,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
