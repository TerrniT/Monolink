import React from 'react'

interface ButtonProps extends React.ComponentProps<"button"> {
  label: string,
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className=
      'border border-slate-400 rounded-xl py-2 px-4 backdrop-blur-lg filter bg-transparent hover:border-zinc-600 hover:text-gray-800 transition-all duration-150 text-sm'

      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
