import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Text1 } from './Text1';

type T = typeof Text1;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Text1,
    args: {
        children: `Hogehoge${(<br />)}AAAAAAA`
    }
} as Meta;

export const Default: Story = {};
