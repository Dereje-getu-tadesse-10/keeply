// import { create } from 'zustand';

// type ModalState = {
//   isOpen: boolean;
//   toggleModal: () => void;
// };

// export const useModalStore = create<ModalState>((set) => ({
//   isOpen: false,
//   toggleModal: () => set((state) => ({ isOpen: !state.isOpen })),
// }));

import { create } from 'zustand';

type ModalState = {
  modals: Record<string, boolean>;
  toggleModal: (id: string) => void;
};

export const useModalStore = create<ModalState>((set) => ({
  modals: {},
  toggleModal: (id) => set((state) => ({
    modals: {
      ...state.modals,
      [id]: !state.modals[id],
    }
  })),
}));
