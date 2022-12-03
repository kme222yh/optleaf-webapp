import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TaskInfoTitlte } from './TaskInfoTitlte';

type T = typeof TaskInfoTitlte;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TaskInfoTitlte,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
