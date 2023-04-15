import { useCopyToClipboard } from '@/hooks/'
import { deleteLink } from '@/service/link.service'
import { LinkDef } from '@/types'
import { Menu, Transition } from '@headlessui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Fragment } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { MdOutlineFileCopy } from 'react-icons/md'
import { toast } from 'react-toastify'

const LinkDropmenu = (props: LinkDef) => {
  const [value, copy] = useCopyToClipboard()
  const queryClient = useQueryClient()

  const { mutate } = useMutation(['links'], () => deleteLink(props.id), {
    onSuccess: () => {
      queryClient.invalidateQueries()
    }
  })

  const handleDelete = async () => {
    mutate()
    toast("Success", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="abosolute top-0 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className=" rotate-90 inline-flex w-full justify-center rounded-md px-2 py-2 text-xs font-medium text-white hover:bg-zinc-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <BsThreeDots
              className=" h-5 w-5 text-zinc-200 hover:text-white transition-all duration-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute  mt-2 p-1 z-30 gap-1 flex flex-col w-36 origin-top-right  rounded-md bg-black/50 backdrop-blur-xl  ring-1 ring-gray-100 shadow-lg ring-opacity-5 focus:outline-none">
            <Menu.Item >
              {({ active }) => (
                <button
                  onClick={() => copy(props.url)}
                  className={`${active ? 'bg-zinc-800 rounded-t text-white' : 'text-gray-300'
                    } flex w-full transition-all duration-200 items-center px-1 py-1  text-[13px] self-center`}
                >
                  {active ? (
                    <MdOutlineFileCopy
                      className="mr-2 h-3 w-3"
                      aria-hidden="true"
                    />
                  ) : (
                    <MdOutlineFileCopy
                      className="mr-2 h-3 w-3"
                      aria-hidden="true"
                    />
                  )}
                  Copy Link
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${active ? 'bg-zinc-800 text-white' : 'text-gray-300'
                    }  flex w-full items-center px-1 py-1  text-[13px]`}
                >
                  {active ? (
                    <FaEdit
                      className="mr-2 h-3 w-3 "
                      aria-hidden="true"
                    />
                  ) : (
                    <FaEdit
                      className="mr-2 h-3 w-3"
                      aria-hidden="true"
                    />
                  )}
                  Edit
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleDelete}
                  className={`${active ? 'bg-red-500/10' : ''
                    } group flex w-full items-center rounded-b px-1 py-1 text-[13px] text-red-500 `}
                >
                  {active ? (
                    <AiFillDelete
                      className="mr-2 h-3 w-3 text-red-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <AiFillDelete
                      className="mr-2 h-3 w-3 text-red-500"
                      aria-hidden="true"
                    />
                  )}
                  Delete
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default LinkDropmenu 
