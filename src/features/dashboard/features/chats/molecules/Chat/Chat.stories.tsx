import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Chat } from './Chat';

type T = typeof Chat;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Chat,
    args: {
        icon: '',
        name: 'hogehoge',
        content: 'This is test chat. Content is empty.',
        date: '2222/22/22',
        omit: false
    }
} as Meta;

export const Default: Story = {};
