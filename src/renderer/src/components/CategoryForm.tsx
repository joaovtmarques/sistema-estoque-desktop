import * as Dialog from '@radix-ui/react-dialog'
import { useForm, SubmitHandler } from 'react-hook-form'

import { Input } from './Input'
import { useApi } from '@renderer/hooks/useApi'
import { ICategoryFormInput } from '@renderer/utils/form'

interface CategoryFormProps {
  open?: boolean
  setOpen?: (open: boolean) => void
  type: string
}

export function CategoryForm({ open, setOpen, type }: CategoryFormProps): JSX.Element {
  const api = new useApi()
  const { register, handleSubmit } = useForm<ICategoryFormInput>()

  const onSubmit: SubmitHandler<ICategoryFormInput> = async (data: ICategoryFormInput) => {
    try {
      await api.addCategory(data)

      alert('Categoria cadastrada!')

      setOpen!(false)

      window.location.reload()
    } catch (err: any) {
      alert(err.response.data)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen} defaultOpen={false}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 inset-0 fixed overflow-y-auto grid place-items-center p-8">
          <Dialog.Content className="bg-secondary text-black p-8 w-[90%] sm:2/3 md:w-3/5 lg:w-1/3 h-auto shadow-lg shadow-black/25 rounded-xl">
            <Dialog.Title className="sm:text-base md:text-xl lg:text-xl text-white/70 font-regular font-poppins">
              {(type === 'add' && 'Adicionar uma nova categoria') || 'Editar categoria'}
            </Dialog.Title>

            <form
              id="1"
              className="flex-1 mt-8 flex flex-col gap-4 rounded"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input type="text" placeholder="Nome do item" register={{ ...register('name') }} />

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
