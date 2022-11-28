import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { RectButton } from './RectButton';

type T = typeof RectButton;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: RectButton,
    args: {
        text: 'test button',
        type: 'default'
    }
} as Meta;

export const Default: Story = {};
