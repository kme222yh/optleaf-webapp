import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamMembersList } from './TeamMembersList';

type T = typeof TeamMembersList;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamMembersList,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
