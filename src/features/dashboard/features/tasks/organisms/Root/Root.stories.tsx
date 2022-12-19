import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Root } from './Root';

type T = typeof Root;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Root,
    args: {
        // add props here !!
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
