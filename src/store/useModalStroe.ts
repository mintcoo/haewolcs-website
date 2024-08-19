import { create } from "zustand";

interface IModalStore {
  modalState: boolean;
  modalParams: {
    title: string;
    contents: string;
  };
  setModalClose: () => void;
  setModalOpen: (title: string, contents: string) => void;
}

export const useModalStore = create<IModalStore>()((set) => ({
  modalState: false,
  modalParams: {
    title: "",
    contents: "",
  },

  setModalClose: () => {
    set({ modalState: false });
  },

  setModalOpen: (title, contents) => {
    set({ modalState: true });
    set((state) => ({
      modalParams: {
        ...state.modalParams,
        title: title,
        contents: contents,
      },
    }));
  },
}));
