import { create } from "zustand";

export interface IModalProps {
  title: string;
  contents: string;
  onClickOk?: () => void;
}

interface IModalStore {
  modalState: boolean;
  modalParams: IModalProps;
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
