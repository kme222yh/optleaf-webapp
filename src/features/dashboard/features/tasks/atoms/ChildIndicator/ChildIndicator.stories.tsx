import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ChildIndicator } from './ChildIndicator';

type T = typeof ChildIndicator;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ChildIndicator,
    args: {
        visible: true
    }
} as Meta;

export const Default: Story = {};
