import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { CreateButton } from "./CreateButton";

type T = typeof CreateButton;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: CreateButton,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};