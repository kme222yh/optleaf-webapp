import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { TaskBrancies } from "./TaskBrancies";

type T = typeof TaskBrancies;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: TaskBrancies,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};