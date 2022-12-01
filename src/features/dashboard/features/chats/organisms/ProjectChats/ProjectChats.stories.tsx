import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectChats } from './ProjectChats';

type T = typeof ProjectChats;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectChats,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
