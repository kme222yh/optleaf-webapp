import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamsHeader } from './TeamsHeader';

type T = typeof TeamsHeader;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamsHeader,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
