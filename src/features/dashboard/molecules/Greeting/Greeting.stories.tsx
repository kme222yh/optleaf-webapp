import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Greeting } from './Greeting';

type T = typeof Greeting;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Greeting,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
