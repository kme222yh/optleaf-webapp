import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { InfoTitleWrapper } from './InfoTitleWrapper';

type T = typeof InfoTitleWrapper;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: InfoTitleWrapper,
    args: {
        title: (
            <p>
                hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
            </p>
        ),
        menu: (
            <div>
                <p>hogehoge</p>
                <p>hogehoge</p>
                <p>hogehoge</p>
                <p>hogehoge</p>
                <p>hogehoge</p>
                <p>hogehoge</p>
            </div>
        ),
        displayMenu: false
    }
} as Meta;

export const Default: Story = {};
