import React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { ReactSVG } from "react-svg"
import { AiOutlineLoading } from "react-icons/ai"

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
  isLoading?: boolean
}

interface IconProps {
  iconName: string
}

const Icon = ({ iconName }: IconProps) => {
  return <ReactSVG src={`${iconName}.svg`} className="w-6 h-6 object-contain" />
}

const Button: React.FC<ButtonProps> = ({ className, icon, title, isLoading, ...props }) => {
  return (
    <button
      className={cn(
        `bg-green-400 w-full text-md md:whitespace-nowrap text-white text-center py-2 px-4 flex items-center ${icon ? "justify-between" : "justify-center"} rounded-lg`,
        className,
      )}
      {...props}
    >
      {icon &&
        <div className="mr-2">
          <Icon iconName={icon} />
        </div>
      }
      {isLoading ? <AiOutlineLoading /> : (
        <p className='mx-auto'>{title}</p>
      )}
    </button>
  )
}

export default Button
