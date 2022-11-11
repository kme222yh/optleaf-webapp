import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { GuestLoginView } from './GuestLoginView';

type T = typeof GuestLoginView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: GuestLoginView,
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
