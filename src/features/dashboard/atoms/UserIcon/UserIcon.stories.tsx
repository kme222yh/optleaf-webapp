import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { UserIcon } from './UserIcon';

type T = typeof UserIcon;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: UserIcon,
    args: {
        src: '',
        size: '40px'
    }
} as Meta;

export const Default: Story = {};
