import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamsList } from './TeamsList';

type T = typeof TeamsList;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamsList,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
