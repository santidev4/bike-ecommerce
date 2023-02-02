import React from 'react'
import { DashboardContainer } from '../styles/Admin/DashboardContainer.styled'
import { Column, ProductsForm } from '../styles/Admin/ProductsForm.styled'
import { Input } from '../styles/Auth/Input.styled'
import { ButtonSubmit } from '../styles/Auth/ButtonSubmit.styled'
import { useForm, Controller } from 'react-hook-form'
import { useCreateCategory, useGetCategories } from '../../api/AdminHooks'
import { CreateCategoryType } from '../../types/AdminTypes'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'

function CreateCategory () {
  const animatedComponents = makeAnimated()
  const { register, formState: { errors, isDirty, isValid }, handleSubmit, control } = useForm<CreateCategoryType>({ mode: 'onBlur' })

  const { data } = useGetCategories()
  const { mutate } = useCreateCategory()
  const onSubmit = (data: CreateCategoryType) => mutate(data)

  const parentCatOptions = data?.map((e: CreateCategoryType) => {
    if (e.parent_id === null) {
      return {
        label: e.name,
        value: e.id
      }
    }
    return null
  })

  // TODO crar categoria con su subcategoria
  // TODO traer subcategorias desde el backend

  return (
    <DashboardContainer>
      <ProductsForm onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <label>category name</label>
          <Input type='text' {...register('name', { required: true })} />
          { errors?.name?.type === 'required' && 'write a name'}
        </Column>
        <Column>
          <label>parent category</label>
          <Controller
            name='parent_id'
            control={control}
            // rules={{ required: 'false' }}
            render={({ field }) => {
              return <Select
              options={parentCatOptions}
              {...field}
              closeMenuOnSelect={true}
              components={animatedComponents}
              isClearable={true}
              isSearchable={true}
              />
            }}
          />
        </Column>
        <ButtonSubmit disabled={!isDirty || !isValid} value='Crear' />
      </ProductsForm>
    </DashboardContainer>
  )
}

export default CreateCategory
