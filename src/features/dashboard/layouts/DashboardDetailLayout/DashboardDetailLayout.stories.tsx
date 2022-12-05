import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardDetailLayout } from './DashboardDetailLayout';

type T = typeof DashboardDetailLayout;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardDetailLayout,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
