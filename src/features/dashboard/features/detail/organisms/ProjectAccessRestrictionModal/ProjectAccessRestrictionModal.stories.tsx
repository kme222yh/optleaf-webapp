import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectAccessRestrictionModal } from './ProjectAccessRestrictionModal';

type T = typeof ProjectAccessRestrictionModal;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectAccessRestrictionModal,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
