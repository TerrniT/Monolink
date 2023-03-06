import React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { IconType } from "react-icons/lib"
import { ReactSVG } from "react-svg"

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string
  className?: string
  icon?: string
}

interface IconProps {
  iconName: string
}

const Icon = ({ iconName }: IconProps) => {
  return <ReactSVG src={`${iconName}.svg`} className="w-6 h-6 object-contain" />
}

const Button: React.FC<ButtonProps> = ({ className, icon, title, ...props }) => {
  return (
    <button
      className={cn(
        `bg-green-400 text-md md:whitespace-nowrap text-white text-center py-2 px-4 flex items-center ${icon ? "justify-between" : "justify-center"} rounded-lg`,
        className,
      )}
      {...props}
    >
      {icon && <Icon iconName={icon} />}
      <p className='pl-2 mx-auto'>{title}</p>
    </button>
  )
}

export default Button
