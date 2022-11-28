import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DetailTitle } from './DetailTitle';

type T = typeof DetailTitle;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DetailTitle,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
