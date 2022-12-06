import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectTeamMenberList } from './ProjectTeamMenberList';

type T = typeof ProjectTeamMenberList;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectTeamMenberList,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
