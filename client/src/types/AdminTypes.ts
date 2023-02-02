export interface CreateCategoryType {
  name: string,
  parent_id?: string,
  id?: number
}

export interface CreateBrandType {
  name: string
}

export interface SelectOptionsType {
  label: string,
  value: number
}

export type ProductType = {
  name: string
  price: number,
  width: number,
  height: number,
  weight: number,
  stock: number,
  length: number,
  brand_id: number,
  img: string,
  description: string,
  categories: CreateCategoryType[]
}
