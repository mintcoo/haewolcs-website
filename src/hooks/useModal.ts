import { useModalStore } from "@/store/useModalStore";

export function useModal() {
  const { setModalOpen, setModalClose } = useModalStore();

  const openModal = (
    title: string,
    contents: string,
    onClickOk?: () => void,
  ) => {
    setModalOpen(title, contents, onClickOk);
  };

  const closeModal = () => {
    setModalClose();
  };

  return { openModal, closeModal };
}
