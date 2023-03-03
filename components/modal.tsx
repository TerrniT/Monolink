import { useModalStore } from '@/store/store'
import { Dialog, Transition } from '@headlessui/react'
import { NextComponentType } from 'next'
import { Fragment, useState } from 'react'

import { BsPlus } from 'react-icons/bs'

const Modal: NextComponentType = () => {
  const { open, setOpen } = useModalStore((state) => ({
    open: state.open,
    setOpen: state.setOpen,
  }))

  return (
    <>
      <button
        title="Add link"
        onClick={setOpen}
        className="my-auto mr-6 flex w-auto items-center justify-center self-end rounded-lg bg-green-400 px-3 py-2 font-bold text-black"
      >
        <BsPlus className="text-2xl" />
      </button>

      <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={setOpen}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/60" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl border border-gray-600 bg-zinc-900 p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white"
                >
                  Add Link
                </Dialog.Title>

                <div className="mt-4 flex gap-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-fuchsia-100 px-4 py-2 text-sm font-medium text-fuchsia-900 hover:bg-fuchsia-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2"
                    onClick={setOpen}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-fuchsia-100 px-4 py-2 text-sm font-medium text-fuchsia-900 hover:bg-fuchsia-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2"
                    onClick={setOpen}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Modal
