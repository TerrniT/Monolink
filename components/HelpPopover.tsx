import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { MdClose, MdCollections, MdHelpOutline, MdKeyboardHide, MdLiveHelp, MdMobileScreenShare, MdNote, MdTabletMac } from 'react-icons/md'
import Image from "next/image"
import { FaUserPlus } from 'react-icons/fa'

const HelpPopover = () => {
  return (
    <Popover className="z-50 hidden lg:block md:block shadow-md">
      <Popover.Button className='flex text-sm duration-150 transition-all absolute bottom-7 right-7 px-4 py-2 bg-zinc-800/20 ring-1 ring-zinc-800 hover:ring-zinc-600 hover:text-gray-400 items-center justify-start gap-1 text-zinc-500 rounded-lg' ><MdHelpOutline />
        Help
      </Popover.Button>
      <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
      <Transition
        className="absolute right-6 bottom-20"
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="z-50 bg-zinc-800/90 backdrop-blur-md  rounded-md w-[16rem] text-sm ring-1 ring-zinc-700/60">
          <div className='px-3 py-2 '>
            <div className='flex items-center justify-between'><h2 className='font-medium'>Help</h2><Popover.Button className='rounded-full bg-zinc-600 p-1'><MdClose /></Popover.Button></div>
            <div className='flex items-center justify-between my-3'><h2 className='font-medium'>Popular topics</h2><Link href="/blog" className='text-cyan-600'>Show all</Link></div>

            <div className='flex flex-col gap-2 '>
              <div className='bg-zinc-700/60 ring-1 ring-zinc-700 w-full flex items-center rounded-md px-2 py-2'>
                <div className='w-36 h-14 object-cover mr-2'>
                  <Image src="/group.jpg" alt="blog item" width={140} height={140} className="w-full h-full object-cover rounded-md" />
                </div>
                <div className='flex flex-col gap-1 text-[12px] leading-3 w-full'>
                  <h3 className='font-bold'>Building Collection</h3>
                  <p className='text-zinc-400'>Learn how to build your own collection with Monolink</p>
                </div>
              </div>

              <div className='bg-zinc-700/60 ring-1 ring-zinc-700 w-full flex items-center rounded-md px-2 py-2'>
                <div className='w-36 h-14 object-cover mr-2'>
                  <Image src="/discord.jpg" alt="blog item" width={140} height={140} className="w-full h-full object-cover rounded-md" />
                </div>
                <div className='flex flex-col gap-1 text-[12px] leading-3 w-full'>
                  <h3 className='font-bold'>Join Discord</h3>
                  <p className='text-zinc-400'>link to discord help page</p>
                </div>
              </div>


              <div className='bg-zinc-700/60 ring-1 ring-zinc-700 w-full flex items-center rounded-md px-2 py-2'>
                <div className='w-36 h-14 object-cover mr-2'>
                  <Image src="/opensource.jpg" alt="blog item" width={140} height={140} className="w-full h-full object-cover rounded-md" />
                </div>

                <div className='flex flex-col gap-1 text-[12px] leading-3 w-full'>
                  <h3 className='font-bold'>How to start your open-source project</h3>
                  <p className='text-zinc-400'>check out our How to Contribute to Open Source guide</p>
                </div>
              </div>

            </div>
            <div className='flex items-center justify-between my-3'><h2 className='font-medium'>Get Started</h2><p className='bg-accent-green/20 ring-1 ring-accent-green rounded-md text-[11px] px-1 text-accent-green'>monolink</p></div>
            <div className='bg-zinc-700/60 ring-1 ring-zinc-700 w-full flex flex-col gap-2 rounded-md px-1 py-1 '>
              <Link href="/" className='flex items-center'>
                <div className='rounded-full bg-blue-700 p-1 text-white'>
                  <MdCollections />
                </div>
                <div className='flex flex-col gap-1 text-xs leading-3'>
                  <h3 className='font-medium pl-2'>Start using your collection</h3>
                </div>
              </Link>

              <Link href="/" className='flex items-center'>
                <div className='rounded-full bg-blue-700 p-1 text-white'>
                  <MdNote className='rotate-90' />
                </div>
                <div className='flex flex-col gap-1 text-xs leading-3'>
                  <h3 className='font-medium pl-2'>Create your first note</h3>
                </div>
              </Link>

              <Link href="/" className='flex items-center'>
                <div className='rounded-full bg-blue-700 p-1 text-white'>
                  <MdMobileScreenShare />
                </div>
                <div className='flex flex-col gap-1 text-[14px] leading-3'>
                  <h3 className='font-medium pl-2 '>Download our
                    <Link href="/ios" className="text-cyan-500 underline underline-offset-1 px-1">IOS</Link>
                    and
                    <Link href="/android" className="text-cyan-500 underline underline-offset-1 pl-1">Android App</Link>
                  </h3>
                </div>
              </Link>

              <Link href="/" className='flex items-center'>
                <div className='rounded-full bg-blue-700 p-1 text-white'>
                  <MdTabletMac />
                </div>
                <div className='flex flex-col gap-1 text-xs leading-3'>
                  <h3 className='font-medium pl-2'>Install our
                    <Link href="/ios" className="text-cyan-500 underline underline-offset-1 px-1">Chrome Extension</Link>
                  </h3>
                </div>
              </Link>

              <Link href="/" className='flex items-center'>
                <div className='rounded-full bg-blue-700 p-1 text-white'>
                  <FaUserPlus />
                </div>
                <div className='flex flex-col gap-1 text-xs leading-3'>
                  <h3 className='font-medium pl-2'>
                    Invite your team
                  </h3>
                </div>
              </Link>
            </div>
          </div>
          <div className='mt-4 h-[1px] bg-zinc-700 w-full'></div>
          <div className='px-4 py-4 flex flex-col gap-1'>
            <Link href="/" className='flex gap-2 items-center hover:text-gray-200'>
              <MdLiveHelp />
              <p className='text-xs '>Help center</p>
            </Link>
            <Link href="/" className='flex gap-2 items-center hover:text-gray-200'>
              <MdKeyboardHide />
              <p className='text-xs'>Keyboard shortcuts</p>
            </Link>
          </div>

        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default HelpPopover
