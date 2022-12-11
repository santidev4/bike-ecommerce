import React from 'react'
import { DashboardContainer } from '../styles/Admin/DashboardContainer.styled'
import { Column, ProductsForm } from '../styles/Admin/ProductsForm.styled'
import { Input } from '../styles/Auth/Input.styled'
import { useForm } from 'react-hook-form'
import { BrandType } from '../../types/AdminTypes'
import { useCreateBrand } from '../../api/AdminHooks'
import { ButtonSubmit } from '../styles/Auth/ButtonSubmit.styled'

function CreateBrand () {
  const { register, formState: { errors, isDirty, isValid }, handleSubmit } = useForm<BrandType>({ mode: 'onBlur' })
  const { mutate } = useCreateBrand()
  const onSubmit = (data: BrandType) => mutate(data)
  return (
    <DashboardContainer>
      <ProductsForm onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <label>brand name</label>
          <Input type='text' {...register('name', { required: true })} />
          { errors?.name?.type === 'required' && 'write a brand name'}
        </Column>
        <ButtonSubmit disabled={!isDirty || !isValid} value='Crear' />
      </ProductsForm>
    </DashboardContainer>
  )
}

export default CreateBrand
