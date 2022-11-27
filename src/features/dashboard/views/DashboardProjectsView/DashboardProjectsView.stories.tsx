import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardProjectsView } from './DashboardProjectsView';

type T = typeof DashboardProjectsView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardProjectsView,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
