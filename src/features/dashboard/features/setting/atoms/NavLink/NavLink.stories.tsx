import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';

import { NavLink } from './NavLink';

type T = typeof NavLink;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: NavLink,
    args: {
        className: '',
        href: '/',
        hrefPattern: 'a',
        text: 'testtest'
    }
} as Meta;

export const Default: Story = {};
