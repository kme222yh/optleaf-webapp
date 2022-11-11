import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { OtherDocument } from './OtherDocument';

type T = typeof OtherDocument;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: OtherDocument,
    args: {
        children: `Hogehoge${(<br />)}AAAAAAA`
    }
} as Meta;

export const Default: Story = {};
