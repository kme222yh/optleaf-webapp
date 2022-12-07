import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { AddUserModal } from './AddUserModal';

type T = typeof AddUserModal;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: AddUserModal,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
