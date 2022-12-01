import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';

import { chats } from '@/mocks/data';

import { Chats } from './Chats';

type T = typeof Chats;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Chats,
    args: {
        chats,
        buttonDisabled: false
    }
} as Meta;

export const Default: Story = {};
