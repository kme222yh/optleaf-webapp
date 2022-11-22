import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { TopNavigation } from "./TopNavigation";

type T = typeof TopNavigation;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TopNavigation,
    args: {
        // add props here !!
    },
} as Meta;


export const Default: Story = {};