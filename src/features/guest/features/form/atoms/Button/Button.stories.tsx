import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Button } from './Button';

type T = typeof Button;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Button,
    args: {
        text: 'testtest',
        collor_reverse: false,
        disabled: false
    }
} as Meta;

export const Default: Story = {};
