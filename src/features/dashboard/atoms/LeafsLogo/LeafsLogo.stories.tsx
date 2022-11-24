import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { LeafsLogo } from "./LeafsLogo";

type T = typeof LeafsLogo;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: LeafsLogo,
    args: {
        // add props here !!
    },
} as Meta;


export const Default: Story = {};