import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamInvitationForm } from './TeamInvitationForm';

type T = typeof TeamInvitationForm;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamInvitationForm,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
