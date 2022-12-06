import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { Modal } from './Modal';

type T = typeof Modal;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: Modal,
    args: {
        // add props here !!
    }
} as Meta;

export const Default: Story = {};
