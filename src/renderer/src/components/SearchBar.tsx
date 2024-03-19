import { useState } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react'

interface SearchBarProps {
  placeholder: string
}

export function SearchBar({ placeholder }: SearchBarProps): JSX.Element {
  const [focus, setFocus] = useState(false)

  return (
    <div
      className={`bg-secondary w-96 h-14 rounded-2xl flex items-center px-7 border-2
       ${(focus && 'border-purple1') || 'border-gray1/25'}`}
    >
      <input
        type="text"
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`flex-1 bg-transparent outline-none ${(focus && 'text-white') || 'text-gray1/25'} placeholder:text-gray1/25`}
      />
      <div className="cursor-pointer">
        <MagnifyingGlass className={`h-7 w-7 ${(focus && 'text-purple1') || 'text-gray1/25'}`} />
      </div>
    </div>
  )
}
