import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { BigText } from './BigText';

type T = typeof BigText;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: BigText,
    args: {
        children: 'afosejfoaej'
    }
} as Meta;

export const Default: Story = {};
