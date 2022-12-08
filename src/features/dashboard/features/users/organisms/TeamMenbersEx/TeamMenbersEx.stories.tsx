import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamMenbersEx } from './TeamMenbersEx';

type T = typeof TeamMenbersEx;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamMenbersEx,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
