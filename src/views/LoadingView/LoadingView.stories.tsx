import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { LoadingView } from './LoadingView';

type T = typeof LoadingView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: LoadingView,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
