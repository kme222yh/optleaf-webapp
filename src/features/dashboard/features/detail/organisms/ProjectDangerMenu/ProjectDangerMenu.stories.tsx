import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectDangerMenu } from './ProjectDangerMenu';

type T = typeof ProjectDangerMenu;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectDangerMenu,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
