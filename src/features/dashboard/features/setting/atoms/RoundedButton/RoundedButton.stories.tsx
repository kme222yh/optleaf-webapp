import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { RoundedButton } from './RoundedButton';

type T = typeof RoundedButton;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: RoundedButton,
    args: {
        text: 'Edit profile'
    }
} as Meta;

export const Default: Story = {};
