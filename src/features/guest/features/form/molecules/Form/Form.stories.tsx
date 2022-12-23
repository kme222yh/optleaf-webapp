import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Form } from './Form';

type T = typeof Form;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Form,
    args: {
        children: <p>Form Area</p>,
        errText: '',
        buttonText: 'login',
        isWaiting: false,
        disabled: false
    }
} as Meta;

export const Default: Story = {};
