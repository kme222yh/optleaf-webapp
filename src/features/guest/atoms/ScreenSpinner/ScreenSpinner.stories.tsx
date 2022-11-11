import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ScreenSpinner } from './ScreenSpinner';

type T = typeof ScreenSpinner;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ScreenSpinner,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
