import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';

import { DragDropContext } from 'react-beautiful-dnd';

import { tasks } from '@/mocks/data';

import { List } from './List';

type T = typeof List;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: List,
    args: {
        tasks
    },
    decorators: [
        (story) => (
            <DragDropContext
                onDragEnd={() => {
                    // eslint-disable-next-line no-console
                    console.log('drop end!!');
                }}
            >
                {story()}
            </DragDropContext>
        )
    ]
} as Meta;

export const Default: Story = {};
