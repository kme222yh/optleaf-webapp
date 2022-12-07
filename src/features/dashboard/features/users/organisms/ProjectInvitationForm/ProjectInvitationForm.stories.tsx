import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectInvitationForm } from './ProjectInvitationForm';

type T = typeof ProjectInvitationForm;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectInvitationForm,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
