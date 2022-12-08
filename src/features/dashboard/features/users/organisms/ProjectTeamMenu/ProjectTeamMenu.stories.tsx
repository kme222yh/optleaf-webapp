import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectTeamMenu } from './ProjectTeamMenu';

type T = typeof ProjectTeamMenu;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectTeamMenu,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
