import { type ComponentMeta, type ComponentStoryObj } from "@storybook/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from "./NavLink";

type T = typeof NavLink;
type Meta = ComponentMeta<T>;
type Story = ComponentStoryObj<T>;

export default {
    component: NavLink,
    args: {
        className: '',
        href: '/',
        hrefPattern: 'a',
        children: <FontAwesomeIcon icon={faComment} />,
        text: 'testtest',
        greenBack: false,
    },
} as Meta;


export const Default: Story = {};