import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamInfo } from './TeamInfo';

type T = typeof TeamInfo;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamInfo,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
