import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { OperationDisplay } from './OperationDisplay';

type T = typeof OperationDisplay;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: OperationDisplay,
    args: {
        title: 'Danger operation.',
        content: 'This operation is very danger. Be careful.',
        button: 'Danger',
        // eslint-disable-next-line no-console
        onClick: () => {
            console.log('pusehd!!');
        },
        warning: false
    }
} as Meta;

export const Default: Story = {};
