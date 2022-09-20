import { DashboardContainer } from "./styles/Admin/DashboardContainer.styled"
import { DescriptionProduct } from "./styles/Admin/DescriptionProduct.styled"
import { ProductsForm } from "./styles/Admin/ProductsForm.styled"
import { Select, Option } from "./styles/Admin/Select.styled"
import { ButtonSubmit } from "./styles/Auth/ButtonSubmit.styled"
import { Input } from "./styles/Auth/Input.styled"
import { useForm } from 'react-hook-form'
import { ProductType } from '../types/AdminTypes'

function Dashboard() {

  const { register, formState: { errors, isDirty, isValid }, handleSubmit } = useForm<ProductType>({ mode: 'onChange' })

  const onSubmit = (data: ProductType) => {
    console.log('data', data)
  }

  return (
    <DashboardContainer>
      <ProductsForm onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">product name</label>
          <Input type='text' {...register('name', { required: true })} />
        </div>
        <div>
          <label htmlFor="">price</label>
          <Input type='number' {...register('price', { required: true })} />
        </div>
        <div>
          <label htmlFor="">width</label>
          <Input type='number' {...register('width', { required: true })} />
        </div>
        <div>
          <label htmlFor="">height</label>
          <Input type='number' {...register('height', { required: true })} />
        </div>
        <div>
          <label htmlFor="">weight</label>
          <Input type='number' {...register('weight', { required: true })} />
        </div>
        <div>
          <label htmlFor="">stock</label>
          <Input type='number' {...register('stock', { required: true })} />
        </div>
        <div>
          <label htmlFor="">img</label>
          <Input type='text' {...register('img', { required: true })} />
        </div>
        
        <div>
          <label htmlFor="">description</label>
          <DescriptionProduct {...register('description', { required: true })} />
        </div>
        <div>
          <label htmlFor="">categories</label>
          <Select {...register('category', { required: true })}>
            <Option value="bike">bike</Option>
            <Option value="accesories">accesories</Option>
            <Option value="tire">tire</Option>
          </Select>
          { errors.category?.type === 'required' && <p>choose category</p> }
        </div>
        <div>
          <ButtonSubmit disabled={!isDirty || !isValid} value='Crear' />
        </div>
      </ProductsForm>
    </DashboardContainer>
  )
}

export default Dashboard