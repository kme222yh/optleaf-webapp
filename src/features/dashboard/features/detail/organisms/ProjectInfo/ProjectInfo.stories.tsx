import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectInfo } from './ProjectInfo';

type T = typeof ProjectInfo;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectInfo,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
