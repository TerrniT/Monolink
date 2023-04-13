import { useState, useEffect, Fragment } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { useCmdStore } from "../store/store"
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LinkDef } from "@/types";
import { FiSearch } from "react-icons/fi"
// @ts-ignore
import faviconFetch from "favicon-fetch"
import Indicator from "./atoms/indicator"

interface Props {
  data?: LinkDef[]
}

export default function CommandPallete({ data }: Props) {
  const { open, handleOpen } = useCmdStore((state) => ({
    open: state.open,
    handleOpen: state.setOpen,
  }));

  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    function onKeydown(event: any) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        handleOpen();
      }
    }

    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [open]);

  return (
    <AnimatePresence>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          open={open}
          onClose={handleOpen}
          className="fixed inset-0 p-4 pt-[25vh] overflow-hidden z-40"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/10  bg-opacity-20 backdrop-blur backdrop-filter" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Combobox
              as="div"
              onChange={(lib: any) => {
                window.open(lib.url, "_blank");
              }}
              className=" relative bg-black  max-w-xl mx-auto rounded-2xl shadow-2xl ring-1 ring-white/10 divide-y divide-gray-800 overflow-hidden"
            >
              <div className="flex items-center justify-center px-4">
                <FiSearch className="text-zinc-400 text-lg" />
                <Combobox.Input
                  value={query}
                  onChange={(event) =>
                    setQuery(event?.target.value.toLowerCase())
                  }
                  className="overflow-hidden w-full bg-transparent border-none focus:outline-none focus:ring-0 text-sm placeholder-black/60  p-3 h-12 focus:border-transparent"
                  placeholder="Search or type a command..."
                />

              </div>
              {/* TODO: Rewrite filter-function (name -> title by type Library) */}
              {data && data.length > 0 ? (
                <Combobox.Options className=" scrollbar scrollbar-thumb-zinc-700  py-4 text-sm max-h-96 overflow-y-auto ">
                  {data.map((data) => (
                    <Combobox.Option
                      className="px-2 my-2"
                      key={data.id}
                      value={data}
                    >
                      {({ active }) => (
                        <div
                          className={`px-3 py-2 ${!active
                            ? "bg-black/10 border border-transparent"
                            : "bg-zinc-900/70 border border-zinc-800 "
                            } rounded-xl relative `}
                        >
                          <div className="flex justify-between">
                            <div className="flex gap-2 items-center">
                              {data.url ? (
                                <Image
                                  src={faviconFetch({ uri: data.url })}
                                  width={23}
                                  height={23}
                                  className="object-contain "
                                  alt={data.title}
                                  aria-hidden
                                />
                              ) : (
                                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: `${data.tags.color}` }}></div>
                              )}
                              <span
                                className={`text-medium pr-2 ${!active
                                  ? "text-white font-medium"
                                  : "font-medium"
                                  }`}
                              >
                                {data.title}
                              </span>
                            </div>
                            <div>
                              <span className="text-zinc-200 px-1 mr-2 font-bold py-1 rounded-full text-[12px]" style={{ backgroundColor: `${data.tags.color}` }}>
                                {data.tags.tag_name}
                              </span>
                              {active && <Indicator url={data.url} />}
                            </div>
                          </div>
                          <span className="text-gray-400 text-xs truncate block">
                            {data.description}
                          </span>
                        </div>
                      )}
                    </Combobox.Option>
                  ))}
                </Combobox.Options>
              ) : (
                <div className="p-4 w-full bg-gradient-to-t dark:from-black from-orange-50 flex flex-col justify-center items-center rounded-md ">
                  <Image
                    src="/sad_cat_with_bread.png"
                    alt="not found"
                    width={120}
                    height={120}
                  />

                  <span className="text-lg font-bold text-zinc-600  mx-auto text-center mb-3 ">
                    No result&aposs found
                  </span>
                </div>
              )}
            </Combobox>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </AnimatePresence>
  );
}
