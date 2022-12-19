import create from 'zustand';

type NodeTreeStore = {
    node: string[];
    set: (node: string[]) => void;
    get: () => string[];
};

export const useNodeTreeStore = create<NodeTreeStore>((set, get) => ({
    node: [],
    set: (node) => {
        set({ node });
    },
    get: () => get().node
}));
