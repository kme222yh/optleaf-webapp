import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { FogotPasswordForm } from "./FogotPasswordForm";

type T = typeof FogotPasswordForm;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: FogotPasswordForm,
    args: {
        // add props here !!
    },
} as Meta;


export const Default: Story = {};