export interface CategoryType {
  name: string
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
  categories: CategoryType[]
}

export type BrandType = {
  name: string
}
