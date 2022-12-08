import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DashboardSettingEditProfileView } from './DashboardSettingEditProfileView';

type T = typeof DashboardSettingEditProfileView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardSettingEditProfileView,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
