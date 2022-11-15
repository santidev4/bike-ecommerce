import React from 'react'
import { AuthContainer } from './styles/Auth/AuthContainer.styled'
import { ButtonSubmit } from './styles/Auth/ButtonSubmit.styled'
import { FormLogin } from './styles/Auth/FormLogin.styled'
import { Input } from './styles/Auth/Input.styled'
import { useForm } from 'react-hook-form'
import { CreateAccountData } from '../types/authTypes'
import { useCreateAccount } from '../api/AuthHooks/useCreateAccount'
import { Link } from 'react-router-dom'

function CreateAccount () {
  const { register, formState: { errors, isDirty, isValid }, handleSubmit } = useForm<CreateAccountData>({ mode: 'onChange' })

  const { mutate } = useCreateAccount()

  const onSubmit = (data: CreateAccountData) => {
    mutate(data)
  }

  return (
    <>
      <AuthContainer>
        <FormLogin onSubmit={handleSubmit(onSubmit)}>
          <h2>Create Account</h2>
          <div>
            <label>username</label>
            <Input type='text' {...register('username', { required: true })} />
            {errors.username?.type === 'required' && <p>username is required</p>}
          </div>
          <div>
            <label>email</label>
            <Input type='email' {...register('email', { required: true })} />
          </div>
          <div>
            <label>password</label>
            <Input type='password' {...register('password', { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i })} />
            {errors.password?.type === 'pattern' && <p>password must have at least 1 uppercase letter, 1 lowercase letter, 1 number and 8 characters min </p>}
          </div>
          <ButtonSubmit disabled={!isDirty || !isValid} value='Create' />
          <Link to='/login'>Already have an account?</Link>
        </FormLogin>
      </AuthContainer>
    </>
  )
}

export default CreateAccount
