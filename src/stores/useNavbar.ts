import { create } from 'zustand'

type NavbarState = {
  isOpen: boolean
  toggleNavbar: () => void
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isOpen: false,
  toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),
}))
