import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Team } from './Team';

type T = typeof Team;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Team,
    args: {
        name: 'test team'
    }
} as Meta;

export const Default: Story = {};
