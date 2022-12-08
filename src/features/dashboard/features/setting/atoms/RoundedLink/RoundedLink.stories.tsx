import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { RoundedLink } from './RoundedLink';

type T = typeof RoundedLink;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: RoundedLink,
    args: {
        href: '/',
        text: 'testtest'
    }
} as Meta;

export const Default: Story = {};
