import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Profile } from './Profile';

type T = typeof Profile;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Profile,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
