import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DeleteAccountForm } from './DeleteAccountForm';

type T = typeof DeleteAccountForm;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DeleteAccountForm,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
