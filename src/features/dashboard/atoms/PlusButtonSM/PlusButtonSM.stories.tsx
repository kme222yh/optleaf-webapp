/* eslint-disable no-console */
import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { PlusButtonSM } from './PlusButtonSM';

type T = typeof PlusButtonSM;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: PlusButtonSM,
    args: {
        onClick: () => {
            console.log('hogehoge!!!!');
        }
    }
} as Meta;

export const Default: Story = {};
