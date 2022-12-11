import React from 'react'
import { DashboardContainer } from '../styles/Admin/DashboardContainer.styled'
import { Column, ProductsForm } from '../styles/Admin/ProductsForm.styled'
import { Input } from '../styles/Auth/Input.styled'
import { ButtonSubmit } from '../styles/Auth/ButtonSubmit.styled'
import { useForm } from 'react-hook-form'
import { useCreateCategory } from '../../api/AdminHooks'
import { CategoryType } from '../../types/AdminTypes'

function CreateCategory () {
  const { register, formState: { errors, isDirty, isValid }, handleSubmit } = useForm<CategoryType>({ mode: 'onBlur' })

  const { mutate } = useCreateCategory()
  const onSubmit = (data: CategoryType) => mutate(data)

  return (
    <DashboardContainer>
      <ProductsForm onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <label>category name</label>
          <Input type='text' {...register('name', { required: true })} />
          { errors?.name?.type === 'required' && 'write a name'}
        </Column>
        <ButtonSubmit disabled={!isDirty || !isValid} value='Crear' />
      </ProductsForm>
    </DashboardContainer>
  )
}

export default CreateCategory
