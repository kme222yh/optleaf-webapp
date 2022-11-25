import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardTopView } from './DashboardTopView';

type T = typeof DashboardTopView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardTopView,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
