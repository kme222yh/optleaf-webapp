import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamMenbers } from './TeamMenbers';

type T = typeof TeamMenbers;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamMenbers,
    args: {
        omit: true
    }
} as Meta;

export const Default: Story = {};
