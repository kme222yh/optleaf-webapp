import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Logo } from './Logo';

type T = typeof Logo;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Logo,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
