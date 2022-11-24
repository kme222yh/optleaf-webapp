import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { UserMenu } from "./UserMenu";

type T = typeof UserMenu;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: UserMenu,
    args: {
        isOpened: true,
    },
} as Meta;


export const Default: Story = {};