import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Login } from './Login';

type T = typeof Login;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Login,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
