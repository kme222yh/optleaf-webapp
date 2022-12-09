import create from 'zustand';

export type Message = {
    text: string;
    type: 'success' | 'warning';
    key: string;
    timeoutId: NodeJS.Timeout | null;
    deleteHandler: () => void;
};

type MessageManagerStore = {
    queue: Message[];
    set: (queue: Message[]) => void;
};

export const useMessangerStore = create<MessageManagerStore>((set, get) => ({
    queue: [],
    set: (queue: Message[]) => set({ queue })
}));
