import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Messanger } from './Messanger';

type T = typeof Messanger;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Messanger,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
