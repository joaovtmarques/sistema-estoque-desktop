export interface IItemFormInput {
  name: string
  amount: string
  categoryId: string
  model: string
  serialNumber: string
}

export interface ICategoryFormInput {
  name: string
}

export interface ILoanFormInput {
  itemId: string
  amount: number
  date: Date
  lender: string
  receiver: string
  observation: string
}
