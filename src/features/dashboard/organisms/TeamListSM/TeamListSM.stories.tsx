import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { TeamListSM } from "./TeamListSM";

type T = typeof TeamListSM;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TeamListSM,
    args: {
        height: '500px',
    },
} as Meta;


export const Default: Story = {};