import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { SideNavigator } from './SideNavigator';

type T = typeof SideNavigator;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: SideNavigator,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
