import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardSettingSettingView } from './DashboardSettingSettingView';

type T = typeof DashboardSettingSettingView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardSettingSettingView,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
