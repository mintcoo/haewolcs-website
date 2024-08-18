import { create } from "zustand";

interface IModalStore {
  isModalOpen: boolean;
  setIsModalOpen: (bool: boolean) => void;
}

export const useModalStore = create<IModalStore>()(set => ({
  isModalOpen: false,

  setIsModalOpen: bool => {
    set({ isModalOpen: bool });
  },
}));
