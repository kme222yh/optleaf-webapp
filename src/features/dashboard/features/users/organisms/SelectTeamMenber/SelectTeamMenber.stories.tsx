import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { SelectTeamMenber } from './SelectTeamMenber';

type T = typeof SelectTeamMenber;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: SelectTeamMenber,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
