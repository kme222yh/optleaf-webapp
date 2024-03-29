---
to: <%= path %>/<%= name%>.stories.tsx
---
import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { <%= name %> } from "./<%= name %>";

type T = typeof <%= name %>;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: <%= name %>,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};