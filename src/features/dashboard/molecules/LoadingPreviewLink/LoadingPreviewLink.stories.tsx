import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { LoadingPreviewLink } from './LoadingPreviewLink';

type T = typeof LoadingPreviewLink;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: LoadingPreviewLink,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
