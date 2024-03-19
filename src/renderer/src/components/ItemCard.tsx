import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { PencilSimple, Trash } from '@phosphor-icons/react'

import { ItemForm } from './ItemForm'
import { ItemModel } from '@renderer/utils/models'

interface ItemCardProps {
  item: ItemModel
}

export function ItemCard({ item }: ItemCardProps): JSX.Element {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-center md:justify-normal lg:justify-normal gap-8 bg-secondary
      hover:bg-secondary/60 duration-200 border-[1px] border-gray1/15 rounded-2xl px-8 py-3"
    >
      <Dialog.Root>
        <Dialog.Trigger className="">
          <div className="cursor-pointer" onClick={() => setOpen(true)}>
            <PencilSimple className="text-gray1/25 h-8 w-8 hover:text-blue duration-150" />
          </div>
          <ItemForm open={open} setOpen={setOpen} type="edit" />
        </Dialog.Trigger>
      </Dialog.Root>

      <div className="md:flex-1 lg:flex-1 grid grid-cols sm:grid-cols-2 md:flex lg:flex items-center gap-8">
        <div className="flex flex-col gap-1">
          <p className="font-poppins font-medium text-sm text-gray1/25">Nome</p>
          <p className="font-poppins font-regular text-sm text-white/75">{item.name}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-poppins font-medium text-sm text-gray1/25">Categoria</p>
          <p className="font-poppins font-regular text-sm text-white/75">{item.category?.name}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-poppins font-medium text-sm text-gray1/25">Quantidade</p>
          <p className="font-poppins font-regular text-sm text-white/75">{item.amount}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-poppins font-medium text-sm text-gray1/25">Modelo</p>
          <p className="font-poppins font-regular text-sm text-white/75">{item.model}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-poppins font-medium text-sm text-gray1/25">Número de série</p>
          <p className="font-poppins font-regular text-sm text-white/75">{item.serialNumber}</p>
        </div>
      </div>

      <div className="cursor-pointer">
        <Trash className="text-gray1/25 h-8 w-8 hover:text-red-800 duration-150" />
      </div>
    </div>
  )
}
