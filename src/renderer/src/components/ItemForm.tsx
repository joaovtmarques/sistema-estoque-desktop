import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as Select from '@radix-ui/react-select'
import { CaretDown } from '@phosphor-icons/react'
import { Controller, useForm, SubmitHandler } from 'react-hook-form'

import { Input } from './Input'
import { useApi } from '@renderer/hooks/useApi'
import { IItemFormInput } from '@renderer/utils/form'
import { CategoryModel } from '@renderer/utils/models'

interface ItemFormProps {
  open?: boolean
  setOpen?: (open: boolean) => void
  type: string
}

export function ItemForm({ open, setOpen, type }: ItemFormProps): JSX.Element {
  const api = new useApi()

  const [categories, setCategories] = useState<CategoryModel[]>([])

  async function handleCategories(): Promise<void> {
    try {
      const data = await api.listCategories()

      setCategories(data.data)
    } catch (err: any) {
      alert('As categorias não foram carregadas...')
    }
  }

  useEffect(() => {
    handleCategories()
  }, [categories])

  const { register, handleSubmit, control } = useForm<IItemFormInput>()

  const onSubmit: SubmitHandler<IItemFormInput> = async (data: IItemFormInput) => {
    try {
      await api.addItem(data)

      alert('Item cadastrado')

      setOpen!(false)

      window.location.reload()
    } catch (err: any) {
      alert(err.message)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen} defaultOpen={false}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed overflow-y-auto grid place-items-center p-8">
          <Dialog.Content className="bg-secondary text-black p-8 w-[90%] sm:2/3 md:w-3/5 lg:w-1/3 h-auto shadow-lg shadow-black/25 rounded-xl">
            <Dialog.Title className="sm:text-base md:text-xl lg:text-xl text-white/70 font-regular font-poppins">
              {(type === 'add' && 'Adicionar um novo item') || 'Editar item'}
            </Dialog.Title>

            <form
              id="1"
              className="flex-1 mt-8 flex flex-col gap-4 rounded"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                type="text"
                placeholder="Nome do item"
                register={{ ...register('name', { required: true }) }}
              />

              <Controller
                control={control}
                name="categoryId"
                render={({ field }) => {
                  return (
                    <Select.Root onValueChange={field.onChange} {...field}>
                      <Select.Trigger className="SelectTrigger" aria-label="Categoria">
                        <Select.Value placeholder="Selecione a categoria" />
                        <Select.Icon className="SelectIcon">
                          <CaretDown />
                        </Select.Icon>
                      </Select.Trigger>
                      <Select.Portal>
                        <Select.Content className="SelectContent">
                          <Select.ScrollUpButton className="SelectScrollButton">
                            <CaretDown />
                          </Select.ScrollUpButton>
                          <Select.Viewport className="SelectViewport">
                            <Select.Group>
                              <Select.Label className="SelectLabel">
                                Selecione a categoria
                              </Select.Label>
                              {categories.map((category) => {
                                return (
                                  <Select.Item
                                    className="SelectItem"
                                    value={category.id}
                                    key={category.id}
                                  >
                                    <Select.ItemText>{category.name}</Select.ItemText>
                                    <Select.ItemIndicator className="SelectItemIndicator"></Select.ItemIndicator>
                                  </Select.Item>
                                )
                              })}
                            </Select.Group>
                          </Select.Viewport>
                          <Select.ScrollDownButton className="SelectScrollButton">
                            <CaretDown />
                          </Select.ScrollDownButton>
                        </Select.Content>
                      </Select.Portal>
                    </Select.Root>
                  )
                }}
              />

              <Input
                type="number"
                min="1"
                placeholder="Quantidade em estoque"
                register={{ ...register('amount', { required: true }) }}
              />
              <Input
                type="text"
                placeholder="Modelo"
                register={{ ...register('model', { required: true }) }}
              />
              <Input
                type="text"
                placeholder="Número de série"
                register={{ ...register('serialNumber', { required: true }) }}
              />

              <footer className="mt-6 flex justify-end flex-col md:flex-row lg:flex-row gap-y-6 md:gap-x-6 lg:gap-x-6">
                <button
                  type="submit"
                  className="w-full py-4 bg-purple1 rounded-xl font-poppins text-white text-sm
                  font-regular hover:bg-purple1/65 duration-150"
                >
                  Adicionar
                </button>
                <Dialog.Close className="px-7 md:ml-8 py-4 bg-gray1/25 rounded-xl font-poppins text-white text-sm font-regular hover:bg-gray1/15 duration-150">
                  Cancelar
                </Dialog.Close>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export const DialogPrimitive = Dialog.Root
export const DialogTrigger = Dialog.Trigger
