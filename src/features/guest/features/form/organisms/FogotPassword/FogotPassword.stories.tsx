import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { FogotPassword } from './FogotPassword';

type T = typeof FogotPassword;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: FogotPassword,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
