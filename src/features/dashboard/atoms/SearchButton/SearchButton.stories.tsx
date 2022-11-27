import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { SearchButton } from './SearchButton';

type T = typeof SearchButton;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: SearchButton,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
