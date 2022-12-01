import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { Item } from "./Item";

type T = typeof Item;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Item,
    args: {
        isCompleted: false,
        text: 'Test Task',
        to: '/',
        hasChild: false,
    }
} as Meta;

export const Default: Story = {};