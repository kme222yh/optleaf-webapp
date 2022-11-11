---
to: <%= path %>/<%= name%>.stories.tsx
---
import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
import { <%= name %> } from "./<%= name %>";

type T = typeof <%= name %>;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: <%= name %>,
    args: {},
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        )
    ]
} as Meta;


export const Default: Story = {};