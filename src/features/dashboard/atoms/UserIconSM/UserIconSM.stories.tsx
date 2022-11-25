import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { UserIconSM } from './UserIconSM';

type T = typeof UserIconSM;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: UserIconSM,
    args: {
        src: ''
    }
} as Meta;

export const Default: Story = {};
