import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardDefaultLayout } from './DashboardDefaultLayout';

type T = typeof DashboardDefaultLayout;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardDefaultLayout,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
