import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { RoundedButtonDanger } from './RoundedButtonDanger';

type T = typeof RoundedButtonDanger;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: RoundedButtonDanger,
    args: {
        text: 'delete',
        disabled: false
    }
} as Meta;

export const Default: Story = {};
