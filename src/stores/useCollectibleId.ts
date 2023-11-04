import { create } from "zustand";

type UseCollectibleId = {
    collectibleId: string | null;
    setCollectibleId: (collectibleId: string) => void;
};

export const useCollectibleId = create<UseCollectibleId>((set) => ({
    collectibleId: null,
    setCollectibleId: (collectibleId) => set({ collectibleId }),
}));