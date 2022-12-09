import { useState, useRef } from 'react';

type Message = {
    text: string;
    type: 'success' | 'warning';
    key: string;
    timeoutId: NodeJS.Timeout | null;
    deleteHandler: () => void;
};

type MessangerType = {
    queue: Message[];

    push: (text: string, type: 'success' | 'warning') => void;
    process: (key: string) => void;
};

export const useMessanger = (): MessangerType => {
    const [queue, setQueue] = useState<Message[]>([]);
    const stateRef = useRef<any>();
    stateRef.current = queue;

    const push = (text: string, type: 'success' | 'warning') => {
        const message = {
            text,
            type,
            key: new Date().getTime().toString(),
            timeoutId: null,
            deleteHandler: () => {}
        } as Message;
        message.timeoutId = setTimeout(process, 3000, message.key);
        message.deleteHandler = () => process(message.key);
        setQueue([...stateRef.current, message]);
    };

    const process = (key: string) => {
        const localQueue = [...stateRef.current];
        const index = localQueue.findIndex((message) => message.key === key);
        clearTimeout(localQueue[index].timeoutId as NodeJS.Timeout);
        const newQueue = [...localQueue];
        newQueue.splice(index, 1);
        setQueue(newQueue);
    };

    return { queue, push, process };
};
