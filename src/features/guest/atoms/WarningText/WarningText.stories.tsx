import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { WarningText } from './WarningText';

type T = typeof WarningText;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: WarningText,
    args: {
        children: 'Form Area'
    }
} as Meta;

export const Default: Story = {};
