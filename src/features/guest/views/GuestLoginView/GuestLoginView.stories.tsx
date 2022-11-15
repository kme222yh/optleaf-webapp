import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { GuestLoginView } from './GuestLoginView';

type T = typeof GuestLoginView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: GuestLoginView,
    args: {}
} as Meta;

export const Default: Story = {};
