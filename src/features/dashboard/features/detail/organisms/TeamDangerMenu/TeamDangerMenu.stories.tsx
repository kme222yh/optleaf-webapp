import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { TeamDangerMenu } from './TeamDangerMenu';

type T = typeof TeamDangerMenu;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamDangerMenu,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
