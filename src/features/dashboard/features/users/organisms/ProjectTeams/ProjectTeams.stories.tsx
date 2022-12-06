import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectTeams } from './ProjectTeams';

type T = typeof ProjectTeams;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectTeams,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
