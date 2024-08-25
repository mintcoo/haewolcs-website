"use client";

import { useModalStore } from "@/store/useModalStore";
import {
  Button,
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Modal() {
  const { modalState, setModalClose, modalParams } = useModalStore();

  return (
    <>
      <Dialog
        open={modalState}
        onClose={() => setModalClose()}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center py-4 bg-black bg-opacity-50 ">
          <DialogPanel className="max-w-lg rounded space-y-4 border bg-white py-8 px-20">
            <DialogTitle className="font-bold text-lg flex justify-center">
              {modalParams.title}
            </DialogTitle>
            <Description className="flex justify-center ">
              {modalParams.contents}
            </Description>
            <div className="flex gap-4 justify-center">
              <Button
                className="btn-dark-blue py-2 px-6"
                onClick={() => {
                  modalParams.onClickOk && modalParams.onClickOk();
                  setModalClose();
                }}
              >
                확인
              </Button>
              <Button
                className="btn-white py-2 px-6 "
                onClick={() => setModalClose()}
              >
                취소
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
