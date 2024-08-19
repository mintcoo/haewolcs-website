"use client";

import { useModalStore } from "@/store/useModalStroe";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

// interface IModalProps {
//   open: boolean;
//   title: string;
// }

export default function Modal() {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const { modalState, setModalClose, modalParams } = useModalStore();

  // useEffect(() => {
  //   if (open) {
  //     setIsOpen(open);
  //   }
  //   return () => {
  //     setIsOpen(false);
  //   };
  // }, [open]);

  return (
    <>
      <Dialog
        open={modalState}
        onClose={() => setModalClose()}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            <DialogTitle className="font-bold">{modalParams.title}</DialogTitle>
            <Description>{modalParams.contents}</Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
            <div className="flex gap-4">
              <button onClick={() => setModalClose()}>Cancel</button>
              <button onClick={() => setModalClose()}>Deactivate</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
