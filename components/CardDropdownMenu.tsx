import useCopyToClipboard from '@/hooks/useCopyToClipboard'
import { LinkService } from '@/service/link.service'
import { LinkDef } from '@/types'
import { Menu, Transition } from '@headlessui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Fragment } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { MdOutlineFileCopy } from 'react-icons/md'
import { toast } from 'react-toastify'

const CardDropdownMenu = ({ url }: LinkDef) => {
  const [value, copy] = useCopyToClipboard()
  const queryClient = useQueryClient()

  const { mutate } = useMutation(['links'], () => LinkService.delete(url), {
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
    <div className="abosolute top-0 w-56 text-right">
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y  divide-zinc-800 rounded-md bg-black/50 backdrop-blur-md  ring-1 ring-gray-100 shadow-lg ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => copy(url)}
                  className={`${active ? 'bg-zinc-800 rounded-t text-white' : 'text-gray-300'
                    } group flex w-full transition-all duration-200 items-center px-2 py-2 text-xs`}
                >
                  {active ? (
                    <MdOutlineFileCopy
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                  ) : (
                    <MdOutlineFileCopy
                      className="mr-2 h-5 w-5"
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
                    } group flex w-full items-center  px-2 py-2 text-xs`}
                >
                  {active ? (
                    <FaEdit
                      className="mr-2 h-5 w-5 "
                      aria-hidden="true"
                    />
                  ) : (
                    <FaEdit
                      className="mr-2 h-5 w-5"
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
                  className={`${active ? 'bg-red-500/10 ring-1 ring-red-500 text-red-500' : 'text-gray-300'
                    } group flex w-full items-center rounded-b px-2 py-2 text-xs`}
                >
                  {active ? (
                    <AiFillDelete
                      className="mr-2 h-5 w-5 text-red-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <AiFillDelete
                      className="mr-2 h-5 w-5 text-gray-300"
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

export default CardDropdownMenu
