import { DashboardContainer } from "./styles/Admin/DashboardContainer.styled"
import { DescriptionProduct } from "./styles/Admin/DescriptionProduct.styled"
import { ProductsForm, Row, Column } from "./styles/Admin/ProductsForm.styled"
// import { Select, Option } from "./styles/Admin/Select.styled"
import { ButtonSubmit } from "./styles/Auth/ButtonSubmit.styled"
import { Input } from "./styles/Auth/Input.styled"
import { useForm } from 'react-hook-form'
import { ProductType } from '../types/AdminTypes'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]


function Dashboard() {
  const animatedComponents = makeAnimated()
  const { register, formState: { errors, isDirty, isValid }, handleSubmit } = useForm<ProductType>({ mode: 'onChange' })

  const onSubmit = (data: ProductType) => {
    console.log('data', data)
  }

  return (
    <DashboardContainer>
      <ProductsForm onSubmit={handleSubmit(onSubmit)}>

        <Row>

          <Column>
            <label htmlFor="">product name</label>
            <Input type='text' {...register('name', { required: true })} />
          </Column>
          <Column>
            <label htmlFor="">price</label>
            <Input type='number' {...register('price', { required: true })} />
          </Column>
       

          <Column>
            <label htmlFor="">width</label>
            <Input type='number' {...register('width', { required: true })} />
          </Column>
          <Column>
            <label htmlFor="">height</label>
            <Input type='number' {...register('height', { required: true })} />
          </Column>
        
        </Row>

        <Row>

          <Column>
            <label htmlFor="">weight</label>
            <Input type='number' {...register('weight', { required: true })} />
          </Column>

          <Column>
            <label htmlFor="">stock</label>
            <Input type='number' {...register('stock', { required: true })} />
          </Column>
        
          <Column>
            <label htmlFor="">img</label>
            <Input type='text' {...register('img', { required: true })} />
          </Column>

          <Column>
            <label htmlFor="">description</label>
            <DescriptionProduct {...register('description', { required: true })} />
          </Column>
        </Row>

        

        <Column>
          <Row>
            <Column>
            <label htmlFor="">categories</label>
            <Select 
              // defaultValue={{ label: 'Choose category', value: 'empty' }}
              options={options}
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              />

            { errors.category?.type === 'required' && <p>choose category</p> }
              </Column>
          </Row>
          <Row>
            <ButtonSubmit disabled={!isDirty || !isValid} value='Crear' />
          </Row>     
        </Column>
    
      </ProductsForm>
    </DashboardContainer>
  )
}

export default Dashboard