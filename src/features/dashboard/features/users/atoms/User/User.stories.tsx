import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { User } from './User';

type T = typeof User;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: User,
    args: {
        icon: '',
        name: 'test user',
        role: 'owner',
        selected: false
    }
} as Meta;

export const Default: Story = {};
