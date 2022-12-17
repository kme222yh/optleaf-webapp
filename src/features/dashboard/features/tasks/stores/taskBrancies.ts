import create from 'zustand';

import { Task } from '@/graphql/generated';

interface DA1 {
    // key: parentId or 'project'
    [key: string]: Task[];
}

type TaskBranciesStore = {
    brancies: DA1;
    set: (key: string, tasks: Task[]) => void;
    get: (key: string) => Task[];
};

export const useTaskBranciesStore = create<TaskBranciesStore>((set, get) => ({
    brancies: {},
    set: (key, tasks) => {
        const { brancies } = get();
        brancies[key] = tasks;
        set({ brancies });
    },
    get: (key) => get().brancies[key] ?? []
}));
