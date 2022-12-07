import { user } from '@/mocks/data';
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { UserMenu } from './UserMenu';

type T = typeof UserMenu;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: UserMenu,
    args: {
        user,
        role: 'admin',
        type: 'project'
    }
} as Meta;

export const Default: Story = {};
