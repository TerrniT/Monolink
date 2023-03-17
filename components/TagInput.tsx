import React, { useState } from 'react'
import { UseFormRegister } from 'react-hook-form';
import { FiDelete } from 'react-icons/fi';
import { IFormValues } from './AddLink';


interface Props {
  color: string
  tags: string
  setTags: any
  register: UseFormRegister<IFormValues>
}

const TagInput = ({ color, tags, setTags, register }: Props) => {
  const [isExist, setIsExist] = useState(false)

  const addTag = (e: any) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setTags(e.target.value);
        e.target.value = "";
        setIsExist(true)
      }
    }
  };

  const removeTag = () => {
    setIsExist(false)
  };

  return (
    <div className="bg-transparent rounded-[10px] border-[1px] border-gray-stroke placeholder:text-gray-stroke text-xs p-2.5 h-12">
      <div className="flex h-full items-center">
        {isExist && (
          <div className='bg-opacity-80 border border-zinc-700 rounded-md px-2 py-1 flex items-center gap-1' style={{ backgroundColor: `${color}` + "80", borderColor: `${color}` }}>
            {tags} <span className='cursor-pointer text-gray-300' onClick={() => removeTag()}><FiDelete /></span>
          </div>
        )}

        {!tags.length && (
          <input {...register("tags.tag_name")} className='focus:outline-none placeholder:text-zinc-600 bg-transparent' placeholder='+ Add Tag' onKeyDown={addTag} />
        )}

      </div>
    </div>
  );
}

export default TagInput
