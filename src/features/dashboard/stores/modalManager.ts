import create from 'zustand';

type ModalManagerStore = {
    key: string;
    open: (key: string) => void;

    /*
    If pass some String, return whether string matches with key.
    If does not, returns whether some modal open.
    */
    isOpened: (key?: string) => boolean;

    close: () => void;
    toggle: (key: string) => void;
};

export const useModalManageStore = create<ModalManagerStore>((set, get) => ({
    key: '',
    open: (key) => set(() => ({ key })),
    isOpened: (key) => (key ? get().key === key : get().key !== ''),
    close: () => set(() => ({ key: '' })),
    toggle: (key) => {
        if (get().key === key) {
            get().close();
        } else {
            get().open(key);
        }
    }
}));
