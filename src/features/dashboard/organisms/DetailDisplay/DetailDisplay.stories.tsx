import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DetailDisplay } from './DetailDisplay';

type T = typeof DetailDisplay;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DetailDisplay,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
