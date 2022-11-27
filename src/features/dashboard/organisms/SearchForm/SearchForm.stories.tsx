import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { SearchForm } from './SearchForm';

type T = typeof SearchForm;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: SearchForm,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
