import './Chats.scoped.scss';

import { useRef, useEffect } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Chat as ChatData } from '@/graphql/generated';
import { useElementSize } from '@/hooks/useElementSize';

import { Chat } from '../Chat/Chat';
import { InputTextArea } from '../../atoms/InputTextArea';
import { SendButton } from '../../atoms/SendButton';

export type ChatsProps = {
    className?: string;
    onSend: () => void;
    config: UseFormRegisterReturn<string>;
    chats: ChatData[];
    buttonDisabled: boolean;
};
Chats.defaultProps = {
    className: ''
};

export function Chats({
    className,
    onSend,
    config,
    chats,
    buttonDisabled
}: ChatsProps) {
    const $form = useElementSize();
    const $layout = useElementSize();
    const listHeight = $layout.height - $form.height - 40 - 15;

    const $bottomRef = useRef(null);
    useEffect(() => {
        if ($bottomRef.current) {
            /* @ts-ignore */
            $bottomRef.current.scrollIntoView();
        }
    }, [chats, $form.height]);

    const $chats: JSX.Element[] = [];
    chats.forEach((chat) => {
        $chats.push(
            <li className="Chats-item" key={chat.id}>
                <Chat
                    content={chat.content}
                    date={chat.created_at}
                    icon={chat.owner.icon_image}
                    name={chat.owner.name}
                />
            </li>
        );
    });

    return (
        <div className={`Chats ${className}`} ref={$layout.ref}>
            <div className="Chats-body">
                <ul className="Chats-list" style={{ height: listHeight }}>
                    {$chats}
                    <li className="" ref={$bottomRef} />
                </ul>
                <div className="Chats-form" ref={$form.ref}>
                    <div className="Chats-form-control">
                        <SendButton
                            onClick={onSend}
                            disabled={buttonDisabled}
                        />
                    </div>
                    <InputTextArea
                        id="content"
                        placeholder="message..."
                        config={config}
                    />
                </div>
            </div>
        </div>
    );
}
