export interface CategoryModel {
  id: string
  name: string
}

export interface ItemModel {
  id: string
  name: string
  model?: string | undefined | null
  serialNumber?: string | undefined | null
  categoryId: string
  amount: number
  category?: null | undefined | CategoryModel
}

export interface LoanModel {
  id: string
  itemId: string
  amount: number
  date: Date
  lender: string
  receiver: string
  observation: string
  devolutionDate?: Date
}
