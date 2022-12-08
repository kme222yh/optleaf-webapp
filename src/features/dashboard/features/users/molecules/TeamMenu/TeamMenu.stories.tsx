import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamMenu } from './TeamMenu';

type T = typeof TeamMenu;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamMenu,
    args: {
        name: 'test team',
        description: 'THis is tes team.'
    }
} as Meta;

export const Default: Story = {};
