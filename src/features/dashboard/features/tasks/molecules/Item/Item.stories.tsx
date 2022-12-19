/* eslint-disable no-console */
import { task } from '@/mocks/data';
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Item } from './Item';

type T = typeof Item;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Item,
    args: {
        task,
        index: 0,
        editable: true,
        selected: false,
        toggleCompletedFn: () => console.log('editable!!')
    },
    decorators: [
        (Story) => (
            <DragDropContext
                onDragEnd={() => {
                    // eslint-disable-next-line no-console
                    console.log('drop end!!');
                }}
            >
                <Droppable droppableId="storybook">
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            <Story />
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    ]
} as Meta;

export const Default: Story = {};
