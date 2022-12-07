import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectAddUserModal } from './ProjectAddUserModal';

type T = typeof ProjectAddUserModal;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectAddUserModal,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
