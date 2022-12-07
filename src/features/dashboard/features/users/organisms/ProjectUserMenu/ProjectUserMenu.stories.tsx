import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectUserMenu } from './ProjectUserMenu';

type T = typeof ProjectUserMenu;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectUserMenu,
    args: {
        userId: 1
    }
} as Meta;

export const Default: Story = {};
