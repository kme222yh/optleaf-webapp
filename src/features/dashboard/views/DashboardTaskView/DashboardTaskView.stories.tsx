import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardTaskView } from './DashboardTaskView';

type T = typeof DashboardTaskView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardTaskView,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
