import React from 'react'

interface ButtonProps extends React.ComponentProps<'button'> {
  label: string
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="rounded-xl border border-slate-400 bg-transparent py-2 px-4 text-sm filter backdrop-blur-lg transition-all duration-150 hover:border-zinc-600 hover:text-gray-800"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
