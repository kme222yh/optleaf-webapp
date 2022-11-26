import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { GrayBackground } from "./GrayBackground";

type T = typeof GrayBackground;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: GrayBackground,
    args: {
        // add props here !!
    },
} as Meta;


export const Default: Story = {};