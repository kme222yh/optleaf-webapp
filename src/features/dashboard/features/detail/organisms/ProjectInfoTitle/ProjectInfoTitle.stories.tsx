import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectInfoTitle } from './ProjectInfoTitle';

type T = typeof ProjectInfoTitle;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectInfoTitle,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
