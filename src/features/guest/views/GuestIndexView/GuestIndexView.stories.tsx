import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { GuestIndexView } from './GuestIndexView';

type T = typeof GuestIndexView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: GuestIndexView,
    args: {}
} as Meta;

export const Default: Story = {};
