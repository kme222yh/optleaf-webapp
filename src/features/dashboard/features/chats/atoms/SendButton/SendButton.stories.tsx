import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { SendButton } from './SendButton';

type T = typeof SendButton;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: SendButton,
    args: {
        disabled: false
    }
} as Meta;

export const Default: Story = {};
