import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardTeamView } from './DashboardTeamView';

type T = typeof DashboardTeamView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardTeamView,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
