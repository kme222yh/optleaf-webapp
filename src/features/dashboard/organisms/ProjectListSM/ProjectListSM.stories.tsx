import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { ProjectListSM } from './ProjectListSM';

type T = typeof ProjectListSM;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: ProjectListSM,
    args: {
        height: '500px'
    }
} as Meta;

export const Default: Story = {};
