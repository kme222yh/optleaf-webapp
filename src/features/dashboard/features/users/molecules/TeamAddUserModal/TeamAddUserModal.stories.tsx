import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamAddUserModal } from './TeamAddUserModal';

type T = typeof TeamAddUserModal;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamAddUserModal,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
