import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { InvitationForm } from './InvitationForm';

type T = typeof InvitationForm;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: InvitationForm,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
