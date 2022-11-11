import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TopDocument } from './TopDocument';

type T = typeof TopDocument;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TopDocument,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
