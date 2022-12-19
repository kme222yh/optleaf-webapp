import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Branchies } from './Branchies';

type T = typeof Branchies;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Branchies,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
