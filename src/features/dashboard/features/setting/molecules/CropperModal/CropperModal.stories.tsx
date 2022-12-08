import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { CropperModal } from './CropperModal';

type T = typeof CropperModal;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: CropperModal,
    args: {
        src: ''
    }
} as Meta;

export const Default: Story = {};
