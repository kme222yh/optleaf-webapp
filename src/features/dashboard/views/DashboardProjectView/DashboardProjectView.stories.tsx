import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardProjectView } from './DashboardProjectView';

type T = typeof DashboardProjectView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardProjectView,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
