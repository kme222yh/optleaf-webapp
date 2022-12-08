import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ChangePasswordForm } from './ChangePasswordForm';

type T = typeof ChangePasswordForm;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ChangePasswordForm,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
