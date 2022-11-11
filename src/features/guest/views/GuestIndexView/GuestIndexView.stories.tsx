import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { GuestIndexView } from './GuestIndexView';

type T = typeof GuestIndexView;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: GuestIndexView,
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
