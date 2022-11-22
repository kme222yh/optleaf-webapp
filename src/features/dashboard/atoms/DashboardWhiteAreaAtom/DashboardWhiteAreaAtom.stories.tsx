import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { DashboardWhiteAreaAtom } from "./DashboardWhiteAreaAtom";

type T = typeof DashboardWhiteAreaAtom;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: DashboardWhiteAreaAtom,
    args: {
        // add props here !!
    },
} as Meta;


export const Default: Story = {};