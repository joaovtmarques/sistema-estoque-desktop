import { AxiosResponse } from 'axios'

import { api } from '../services/api'
import { CategoryModel, ItemModel, LoanModel } from '@renderer/utils/models'
import { ICategoryFormInput, IItemFormInput, ILoanFormInput } from '@renderer/utils/form'

interface UseApiProps {
  addCategory(data: ICategoryFormInput): Promise<AxiosResponse<unknown, unknown>>
}

export class useApi implements UseApiProps {
  async addCategory(data: ICategoryFormInput): Promise<AxiosResponse<unknown, unknown>> {
    const request = await api.post('/categories', data)

    return request.data
  }

  async listCategories(): Promise<AxiosResponse<CategoryModel[]>> {
    const request = await api.get('/categories')

    return request
  }

  async addItem(data: IItemFormInput): Promise<AxiosResponse<ItemModel>> {
    const { amount: _, ...itemData } = data

    const request = await api.post('/items', {
      amount: Number(data.amount),
      ...itemData
    })

    return request.data
  }

  async listItems(): Promise<AxiosResponse<ItemModel[]>> {
    const request = await api.get('/items')

    return request
  }

  async findItem(itemId: string): Promise<AxiosResponse<ItemModel | null>> {
    const request = await api.get(`/items/${itemId}`)

    return request
  }

  async addLoan(data: ILoanFormInput): Promise<AxiosResponse<LoanModel>> {
    const { amount: _, ...loanData } = data

    const request = await api.post('/loans', {
      amount: Number(data.amount),
      ...loanData
    })

    return request
  }
}
