import { HTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form/dist/types'

interface InputProps extends HTMLAttributes<HTMLDivElement | HTMLInputElement> {
  icon?: JSX.Element
  type: string
  placeholder?: string
  noMargin?: boolean
  height?: string
  text?: string
  textLg?: string
  min?: string
  register?: UseFormRegisterReturn<string>
}

export function Input({
  type,
  placeholder,
  height,
  text,
  textLg,
  min,
  register,
  ...props
}: InputProps): JSX.Element {
  return (
    <div
      className={`w-full ${height || 'h-16'} flex bg-black/25 rounded-xl overflow-hidden focus-within:border-blue border-gray1/25 border-2 border-solid`}
    >
      <input
        {...props}
        {...register}
        min={min}
        type={type}
        placeholder={placeholder}
        className={`
				flex-1 w-full outline-none px-8 bg-black/25 text-gray1/25 focus-within:text-white ${
          text && textLg
            ? `text-${text} md:text-${textLg} lg:text-${textLg}`
            : 'text-xs md:text-base lg:text-base'
        } font-regular
				`}
      />
    </div>
  )
}
