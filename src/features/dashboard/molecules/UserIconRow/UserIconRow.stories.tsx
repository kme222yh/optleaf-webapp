import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { UserIconRow } from './UserIconRow';

type T = typeof UserIconRow;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: UserIconRow,
    args: {
        icons: ['', ''],
        maxDisplay: 4,
        height: '50px'
    }
} as Meta;

export const Default: Story = {};
