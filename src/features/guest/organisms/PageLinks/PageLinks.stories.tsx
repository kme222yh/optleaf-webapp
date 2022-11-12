import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { PageLinks } from './PageLinks';

type T = typeof PageLinks;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: PageLinks,
    args: {
        login: true,
        register: true,
        fogot: false
    },
} as Meta;

export const Default: Story = {};
