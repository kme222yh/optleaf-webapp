import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { AddTeamModal } from './AddTeamModal';

type T = typeof AddTeamModal;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: AddTeamModal,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
