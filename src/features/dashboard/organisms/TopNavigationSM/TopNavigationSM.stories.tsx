import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { TopNavigationSM } from "./TopNavigationSM";

type T = typeof TopNavigationSM;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TopNavigationSM,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};