import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { EditProfileForm } from './EditProfileForm';

type T = typeof EditProfileForm;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: EditProfileForm,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
