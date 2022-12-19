/* eslint-disable no-console */
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { LeafButton } from './LeafButton';

type T = typeof LeafButton;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: LeafButton,
    args: {
        disabled: false,
        fill: false,
        onClickFn: () => console.log('click!!')
    }
} as Meta;

export const Default: Story = {};
