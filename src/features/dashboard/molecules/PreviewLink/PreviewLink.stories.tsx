import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { PreviewLink } from './PreviewLink';

type T = typeof PreviewLink;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: PreviewLink,
    args: {
        name: 'Test Project',
        content:
            'これはテストプロジェクトですこれはテストプロジェクトですこれはテストプロジェクトですこれはテストプロジェクトです',
        to: '/',
        icons: ['', '']
    }
} as Meta;

export const Default: Story = {};
