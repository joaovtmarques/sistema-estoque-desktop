import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { Stack } from '@phosphor-icons/react'
import { useLocation } from 'react-router-dom'

import { LoanCard, LoanForm, Menu, SearchBar } from '@renderer/components'

export function Loans(): JSX.Element {
  const [open, setOpen] = useState(false)

  const location = useLocation()

  return (
    <div className="h-full w-full">
      <header
        className="pb-8 flex items-center justify-between font-poppins font-semibold text-gray1
        text-xl"
      >
        <div className="flex gap-4 items-center">
          <Stack className="text-purple1 h-10 w-10" />
          Estoque
        </div>
        <Menu routeName={location.pathname} />
      </header>

      <div className="flex items-center justify-between">
        <SearchBar placeholder="Buscar cautela" />
        <div className="flex items-center gap-8 font-poppins font-medium text-gray1/25 text-sm">
          35 cautelas abertas
          <Dialog.Root>
            <Dialog.Trigger className="">
              <div
                onClick={() => setOpen(true)}
                className="px-6 py-3 rounded-2xl flex items-center justify-center font-poppins font-medium
                text-md bg-purple1 text-white cursor-pointer duration-200 hover:bg-purple1/70"
              >
                Adicionar cautela
              </div>
              <LoanForm open={open} setOpen={setOpen} type="add" />
            </Dialog.Trigger>
          </Dialog.Root>
        </div>
      </div>

      <div className="py-8 flex flex-col gap-8">
        <LoanCard />
        <LoanCard />
        <LoanCard />
        <LoanCard />
      </div>
    </div>
  )
}
