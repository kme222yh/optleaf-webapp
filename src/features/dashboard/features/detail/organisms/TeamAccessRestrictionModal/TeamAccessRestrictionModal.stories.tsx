import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamAccessRestrictionModal } from './TeamAccessRestrictionModal';

type T = typeof TeamAccessRestrictionModal;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamAccessRestrictionModal,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
