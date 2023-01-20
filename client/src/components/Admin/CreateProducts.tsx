import React, { useEffect } from 'react'
import { DashboardContainer } from '../styles/Admin/DashboardContainer.styled'
import { DescriptionProduct } from '../styles/Admin/DescriptionProduct.styled'
import { ProductsForm, Row, Column } from '../styles/Admin/ProductsForm.styled'
import { ButtonSubmit } from '../styles/Auth/ButtonSubmit.styled'
import { Input } from '../styles/Auth/Input.styled'
import { useForm, Controller } from 'react-hook-form'
import { ProductType } from '../../types/AdminTypes'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { useCreateProduct, useGetCategories, useGetBrands } from '../../api/AdminHooks'

function CreateProducts () {
  const animatedComponents = makeAnimated()
  const { register, formState: { errors, isDirty, isValid }, handleSubmit, control, setValue, getValues } = useForm<ProductType>({ mode: 'onBlur' })

  const { data: categories } = useGetCategories()
  const { data: brands } = useGetBrands()
  const { mutate } = useCreateProduct()

  const onSubmit = (data: ProductType) => {
    mutate(data)
    console.log('product data', data)
  }

  // const {value:brand_id} = obj.brand_id;
  // const newObj = {brand_id};
  // obj = {...obj, ...newObj}

  // delete obj.brand_id.label;
  // obj.brand_id = obj.brand_id.value
  console.log('getValues', getValues('brand_id'))

  const categoryOptions = categories?.map((e: { name: string, id: number }) => {
    return {
      value: e.id,
      label: e.name
    }
  })

  const brandOptions = brands?.map((e: { name: string, id: number }) => {
    return {
      value: e.id,
      label: e.name
    }
  })

  useEffect(() => {
    // TODO setvalue of brand_id
    console.log('getValues(', getValues())
    setValue('brand_id', 2)
  }, [setValue])

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
            <Input type='number' {...register('price', { required: true, valueAsNumber: true })} />
          </Column>

          <Column>
            <label htmlFor="">width</label>
            <Input type='number' {...register('width', { required: true, valueAsNumber: true })} />
          </Column>
          <Column>
            <label htmlFor="">height</label>
            <Input type='number' {...register('height', { required: true, valueAsNumber: true })} />
          </Column>

        </Row>

        <Row>

          <Column>
            <label htmlFor="">weight</label>
            <Input type='number' {...register('weight', { required: true, valueAsNumber: true })} />
          </Column>

          <Column>
            <label htmlFor="">stock</label>
            <Input type='number' {...register('stock', { required: true, valueAsNumber: true })} />
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

        <Row>

          <Column>
            <label htmlFor="">length</label>
            <Input type='number' {...register('length', { required: true, valueAsNumber: true })} />
          </Column>
        </Row>

        <Row>

        <Column>
          <Row>
            <Column>

              <Controller
              name="categories"
              control={control}
              rules={{ required: 'true' }}
              render={({ field }) => {
                return <Select options={categoryOptions} {...field} closeMenuOnSelect={false} components={animatedComponents} isMulti />
              }}
              />
              { errors.categories?.type === 'required' && <p>choose category</p> }
            </Column>
            <Column>

              <Controller
              name="brand_id"
              control={control}
              rules={{ required: 'true' }}
              render={({ field }) => {
                return <Select
                          options={brandOptions}
                          {...field}
                          closeMenuOnSelect={true}
                          components={animatedComponents}
                           />
              }}
              />
              { errors.brand_id?.type === 'required' && <span>choose brand</span> }
            </Column>
          </Row>

          <Row>
            <ButtonSubmit
             disabled={!isDirty || !isValid} value='Crear' />
          </Row>

        </Column>

        </Row>

      </ProductsForm>
    </DashboardContainer>
  )
}

export default CreateProducts
