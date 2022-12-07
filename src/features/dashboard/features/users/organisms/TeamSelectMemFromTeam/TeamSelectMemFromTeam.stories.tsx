import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamSelectMemFromTeam } from './TeamSelectMemFromTeam';

type T = typeof TeamSelectMemFromTeam;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamSelectMemFromTeam,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
