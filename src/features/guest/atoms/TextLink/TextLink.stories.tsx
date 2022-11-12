import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TextLink } from './TextLink';

type T = typeof TextLink;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TextLink,
    args: {
        children: 'This is TextLink component.'
    },
} as Meta;

export const Default: Story = {};
