import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamUserMenu } from './TeamUserMenu';

type T = typeof TeamUserMenu;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamUserMenu,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
