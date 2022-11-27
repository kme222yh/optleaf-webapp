import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectsHeader } from './ProjectsHeader';

type T = typeof ProjectsHeader;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectsHeader,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
