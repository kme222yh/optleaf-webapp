import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { RegisterForm } from "./RegisterForm";

type T = typeof RegisterForm;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: RegisterForm,
    } as Meta;


export const Default: Story = {};