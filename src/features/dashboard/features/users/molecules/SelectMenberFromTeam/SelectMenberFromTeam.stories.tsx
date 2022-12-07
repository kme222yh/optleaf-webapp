import { teams } from '@/mocks/data';
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { SelectMenberFromTeam } from './SelectMenberFromTeam';

type T = typeof SelectMenberFromTeam;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: SelectMenberFromTeam,
    args: {
        waiting: false,
        teams,
        selected: []
    }
} as Meta;

export const Default: Story = {};
