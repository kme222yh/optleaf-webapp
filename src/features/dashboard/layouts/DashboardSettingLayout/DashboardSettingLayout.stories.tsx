import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardSettingLayout } from './DashboardSettingLayout';

type T = typeof DashboardSettingLayout;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardSettingLayout,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
