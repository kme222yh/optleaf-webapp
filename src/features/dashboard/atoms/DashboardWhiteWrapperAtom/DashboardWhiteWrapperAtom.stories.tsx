import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { DashboardWhiteWrapperAtom } from "./DashboardWhiteWrapperAtom";

type T = typeof DashboardWhiteWrapperAtom;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardWhiteWrapperAtom,
    args: {
        // add props here !!
    },
} as Meta;


export const Default: Story = {};