import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamInfoTitle } from './TeamInfoTitle';

type T = typeof TeamInfoTitle;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamInfoTitle,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
