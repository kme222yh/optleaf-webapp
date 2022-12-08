import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardSettingProfileView } from './DashboardSettingProfileView';

type T = typeof DashboardSettingProfileView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardSettingProfileView,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
