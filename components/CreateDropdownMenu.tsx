import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FaEdit } from 'react-icons/fa'
import { BsPlus } from 'react-icons/bs'
import { useModalStore } from '@/store/store'
import { useSidebar } from '@/hooks'

const CreateDropdownMenu = () => {

  const { open, setOpen } = useModalStore((state) => ({
    open: state.open,
    setOpen: state.setOpen,
  }))

  const { active, showMore, showLess, controls, controlText, controlTitleText } = useSidebar()

  return (
    <Menu as="div" className="relative">


      <Menu.Button className="my-2 h-10 flex w-full text-gray-500 transition-all duration-150 ring-1 ring-transparent   hover:ring-accent-green py-2 items-center justify-between rounded-md" >
        <div className='flex items-center'>
          <div className='w-9'>
            <BsPlus className=" mx-auto text-xl text-accent-green mr-2 bg-accent-green/20 rounded-md" />
          </div>
          {active && (
            <p className='font-medium text-accent-green text-sm'>Add new</p>
          )}

        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-30 mt-2 w-32  origin-top-right divide-y  divide-zinc-800 rounded-md bg-black/50 backdrop-blur-md  ring-1 ring-gray-100 shadow-lg ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={setOpen}
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
                Card
              </button>
            )}
          </Menu.Item>
          <Menu.Item >
            {({ active }) => (
              <button
                onClick={setOpen}
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
                Group
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
                Member
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default CreateDropdownMenu
