import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardTeamsView } from './DashboardTeamsView';

type T = typeof DashboardTeamsView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardTeamsView,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
