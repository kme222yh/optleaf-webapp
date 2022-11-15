import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { GuestFogotPasswordView } from './GuestFogotPasswordView';

type T = typeof GuestFogotPasswordView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: GuestFogotPasswordView,
    args: {}
} as Meta;

export const Default: Story = {};
