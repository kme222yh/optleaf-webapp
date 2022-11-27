import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { PreviewLinkLG } from './PreviewLinkLG';

type T = typeof PreviewLinkLG;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: PreviewLinkLG,
    args: {
        name: 'Test Project',
        content:
            'これはテストプロジェクトですこれはテストプロジェクトですこれはテストプロジェクトですこれはテストプロジェクトです',
        to: '/',
        icons: ['', ''],
        nOfCompleted: 10,
        nOfTasks: 5
    }
} as Meta;

export const Default: Story = {};
