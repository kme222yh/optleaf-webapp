import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';

import { user } from '@/mocks/data';

import { Users } from './Users';

type T = typeof Users;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Users,
    args: {
        users: [user, user, user, user],
        role: ''
    }
} as Meta;

export const Default: Story = {};
