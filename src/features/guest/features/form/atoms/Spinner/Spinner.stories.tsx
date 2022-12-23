import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

type T = typeof Spinner;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Spinner,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
