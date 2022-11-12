import { type ComponentMeta, type ComponentStoryObj } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

import { RoundedLink } from './RoundedLink';

type T = typeof RoundedLink;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: RoundedLink,
    args: {
        text: 'testtest',
        layout_reverse: false,
        collor_reverse: false,
        disabled: false,
        icon: <FontAwesomeIcon icon={faRightToBracket} />,
        href: '/'
    },
} as Meta;

export const Default: Story = {};
