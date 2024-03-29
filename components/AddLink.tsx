import { useModalStore } from '@/store/store'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useSession, useAddLink } from "@/hooks/"
import { MdClose } from 'react-icons/md'
import { SubmitHandler, useForm } from "react-hook-form"
// @ts-ignore-line
import { CirclePicker } from "react-color"
import TagInput from './TagInput'

export interface IFormValues {
  id: string
  title: string;
  description: string;
  url: string;
  tags: {
    color: string,
    tag_name: string
  }
}

const AddLink: React.FC = () => {

  const { open, setOpen } = useModalStore((state) => ({
    open: state.open,
    setOpen: state.setOpen,
  }))

  const { userId } = useSession()

  const [color, setColor] = useState<string>("")
  const [tags, setTags] = useState<string>("");

  const { register, reset, handleSubmit } = useForm<IFormValues>()

  const { mutate } = useAddLink()

  const onSubmit: SubmitHandler<IFormValues> = async (formData) => {
    if (userId) {
      const innerObj = formData.tags;

      const modifiedInnerObj = {
        ...innerObj,
        color: color
      };

      const modifiedOuterObj = {
        ...formData,
        tags: modifiedInnerObj
      };

      mutate({
        data: modifiedOuterObj, id: userId
      })

      reset()
      setTags("")
      setOpen()
    }
  }



  return (
    <>
      <Transition appear show={open} as={Fragment} >
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setOpen()}
        >
          <div className="min-h-screen px-4 text-center " >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0  bg-black/50" />
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
              <div className="my-6 inline-block w-full max-w-md transform overflow-hidden py-4 rounded-2xl ring-1 ring-zinc-800 bg-zinc-900  text-left align-middle shadow-xl transition-all">
                <div className='flex justify-between items-center border-b border-zinc-700 w-full px-6 pb-4 mb-4'>
                  <Dialog.Title
                    as="h1"
                    className="text-lg font-medium leading-6 text-white "
                  >
                    Create a link card
                  </Dialog.Title>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent  p-2 text-sm font-medium text-fuchsia-900 hover:bg-fuchsia-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2"
                  >
                    <MdClose className='text-lg text-white' />
                  </button>
                </div>

                <div className='flex flex-col w-full px-6  '>
                  <Dialog.Description
                    as="h3"
                    className="text-sm font-normal leading-6 text-zinc-600 mb-4"
                  >
                    Lorem ipsum dolor sit amet, officia excepteur ex fugiat
                  </Dialog.Description>
                  <Dialog.Panel>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className='flex flex-col gap-4' >
                        <div className='flex flex-col gap-1 '>
                          <div className='flex gap-1'>
                            <label className='text-white font-medium text-md'>Title</label>
                            <p className='text-accent-green font-bold'>*</p>
                          </div>
                          <input {...register("title")} className='bg-transparent rounded-[10px] border-[1px] border-gray-stroke placeholder:text-gray-stroke text-xs p-3' type="text" placeholder='Type title' />
                        </div>

                        <div className='flex flex-col gap-1 '>
                          <div className='flex gap-1'>
                            <label className='text-white font-medium text-md'>Description</label>
                          </div>
                          <input {...register("description")} className='bg-transparent rounded-[10px] border-[1px] border-gray-stroke placeholder:text-gray-stroke text-xs p-3' type="text" placeholder='Type description' />
                        </div>
                        <div className='flex flex-col gap-1 mb-4'>
                          <div className='flex gap-1'>
                            <label className='text-white font-medium text-md'>URL</label>
                            <p className='text-accent-green font-bold'>*</p>
                          </div>
                          <input {...register("url")} className='bg-transparent rounded-[10px] border-[1px] border-gray-stroke placeholder:text-gray-stroke text-xs p-3' type="text" placeholder='Paste url' />
                        </div>

                        <div className='flex flex-col gap-1 mb-4'>
                          <div className='flex gap-1'>
                            <label className='text-white font-medium text-md'>Chose color</label>
                            <p className='text-accent-green font-bold'>*</p>
                          </div>
                          <div className='w-full'>
                            <CirclePicker color={color} onChange={(e: any) => setColor(e.hex)} />
                          </div>
                          <TagInput color={color} register={register} setTags={setTags} tags={tags} />
                        </div>

                        <div className="mt-4 flex px-6 justify-end gap-4">
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md  bg-accent-green/20 px-6 py-2 text-sm font-medium text-accent-green-second border border-accent-green hover:bg-accent-green hover:text-black duration-100 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2"
                          >
                            Create a card
                          </button>
                        </div>
                      </div>
                    </form>

                  </Dialog.Panel>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default AddLink 
