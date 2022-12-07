import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectSelectMemFromTeam } from './ProjectSelectMemFromTeam';

type T = typeof ProjectSelectMemFromTeam;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectSelectMemFromTeam,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
