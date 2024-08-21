import { create } from "zustand";

interface IModalStore {
  modalState: boolean;
  modalParams: {
    title: string;
    contents: string;
    onClickOk?: () => void;
  };
  setModalClose: () => void;
  setModalOpen: (
    title: string,
    contents: string,
    onClickOk?: () => void,
  ) => void;
}

export const useModalStore = create<IModalStore>()((set) => ({
  modalState: false,
  modalParams: {
    title: "",
    contents: "",
    onClickOk: undefined,
  },

  setModalClose: () => {
    set({ modalState: false });
  },

  setModalOpen: (title, contents, onClickOk) => {
    set({ modalState: true });
    set((state) => ({
      modalParams: {
        ...state.modalParams,
        title,
        contents,
        onClickOk,
      },
    }));
  },
}));
