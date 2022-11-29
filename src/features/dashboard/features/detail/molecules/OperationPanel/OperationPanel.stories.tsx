import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { OperationPanel } from './OperationPanel';

type T = typeof OperationPanel;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: OperationPanel,
    args: {
        title: 'Danger operation.',
        content: 'This operation is very danger. Be careful.',
        button: 'Danger',
        onClick: () => {},
        warning: false
    }
} as Meta;

export const Default: Story = {};
