import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useModalStore } from "../store/store";

const Modal = () => {
  const { open, setOpen } = useModalStore((state) => ({
    open: state.open,
    setOpen: state.setOpen,
  }));

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-sm rounded bg-white">
          <Dialog.Title>Complete your order</Dialog.Title>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
