import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamMenbersSelector } from './TeamMenbersSelector';

type T = typeof TeamMenbersSelector;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamMenbersSelector,
    args: {
        selected: [],
        excluded: [1]
    }
} as Meta;

export const Default: Story = {};
