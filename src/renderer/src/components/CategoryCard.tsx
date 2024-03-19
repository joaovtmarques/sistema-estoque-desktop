import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { Trash, PencilSimple } from '@phosphor-icons/react'

import { CategoryForm } from './CategoryForm'
import { CategoryModel } from '@renderer/utils/models'

interface CategoryCardProps {
  category: CategoryModel
}

export function CategoryCard({ category }: CategoryCardProps): JSX.Element {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="flex flex-col md:flex-row lg:flex-row items-center justify-center md:justify-normal
        lg:justify-normal gap-8 bg-secondary hover:bg-secondary/60 duration-200 border-[1px] border-gray1/15
        rounded-2xl px-8 py-3 sm:w-1/2 md:w-1/2 lg:w-1/3"
    >
      <Dialog.Root>
        <Dialog.Trigger className="">
          <div className="cursor-pointer" onClick={() => setOpen(true)}>
            <PencilSimple className="text-gray1/25 h-8 w-8 hover:text-blue duration-150" />
          </div>
          <CategoryForm open={open} setOpen={setOpen} type="edit" />
        </Dialog.Trigger>
      </Dialog.Root>

      <div className="flex-1 flex items-center gap-8">
        <div className="flex flex-col gap-1 items-center">
          <p className="font-poppins font-medium text-sm text-gray1/25">Nome</p>
          <p className="font-poppins font-regular text-sm text-white/75">{category.name}</p>
        </div>
      </div>

      <div className="cursor-pointer">
        <Trash className="text-gray1/25 h-8 w-8 hover:text-red-800 duration-150" />
      </div>
    </div>
  )
}
