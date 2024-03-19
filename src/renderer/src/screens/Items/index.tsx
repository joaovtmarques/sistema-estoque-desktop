import ReactLoading from 'react-loading'
import { useEffect, useState } from 'react'
import { Stack } from '@phosphor-icons/react'
import { useLocation } from 'react-router-dom'
import * as Dialog from '@radix-ui/react-dialog'

import { useApi } from '@renderer/hooks/useApi'
import { ItemModel } from '@renderer/utils/models'
import { ItemCard, ItemForm, Menu, SearchBar } from '@renderer/components'

export function Items(): JSX.Element {
  const api = new useApi()
  const location = useLocation()

  const [open, setOpen] = useState(false)
  const [items, setItems] = useState<ItemModel[]>([])
  const [loading, setLoading] = useState(false)

  async function handleItems() {
    setLoading(true)
    try {
      const request = await api.listItems()

      setItems(request.data)
      setLoading(false)
    } catch (err: any) {
      alert('Items não carregados')
      handleItems()
    }
  }

  useEffect(() => {
    handleItems()
  }, [])

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
        <SearchBar placeholder="Buscar item" />
        <div className="flex items-center gap-8 font-poppins font-medium text-gray1/25 text-sm">
          35 items cadastrados
          <Dialog.Root>
            <Dialog.Trigger className="">
              <div className="flex items-center gap-4">
                <div
                  onClick={() => setOpen(true)}
                  className="px-6 py-3 rounded-2xl flex items-center justify-center font-poppins font-medium
                  text-md bg-purple1 text-white cursor-pointer duration-200 hover:bg-purple1/70"
                >
                  Adicionar item
                </div>
                <div
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 rounded-2xl flex items-center justify-center font-poppins font-medium
                  text-md bg-secondary text-white cursor-pointer duration-200 hover:bg-purple1/70"
                >
                  Atualizar
                </div>
              </div>
              <ItemForm open={open} setOpen={setOpen} type="add" />
            </Dialog.Trigger>
          </Dialog.Root>
        </div>
      </div>

      <div className="py-8 flex flex-col gap-8">
        {loading ? (
          <div className="h-full flex items-center justify-center">
            <ReactLoading type="cylon" color="#4D61FC" height={'5%'} width={'5%'} />
          </div>
        ) : (
          items.map((item) => {
            return <ItemCard item={item} key={item.id} />
          })
        )}
      </div>
    </div>
  )
}
