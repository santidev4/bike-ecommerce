import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContainer } from './styles/Auth/AuthContainer.styled'
import { ButtonSubmit } from './styles/Auth/ButtonSubmit.styled'
import { FormLogin } from './styles/Auth/FormLogin.styled'
import { Input } from './styles/Auth/Input.styled'
import { useForm } from 'react-hook-form'
import { CreateAccountData } from '../types/authTypes'
import { useCreateAccount } from '../api/AuthHooks/useCreateAccount'
import toast, { Toaster } from 'react-hot-toast'
import { ColorRing } from 'react-loader-spinner'

function CreateAccount () {
  const navigate = useNavigate()
  const { register, reset, formState: { errors, isDirty, isValid }, handleSubmit } = useForm<CreateAccountData>({ mode: 'onChange' })
  const [loader, setLoader] = useState<boolean>(false)
  const { mutate, isError, isSuccess } = useCreateAccount()

  const onSubmit = (data: CreateAccountData) => {
    mutate(data)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success('Account created succesfully', {
        id: 'newAccountSucces'
      })
      setLoader(true)
      setInterval(() => {
        navigate('/')
        setLoader(false)
      }, 1500)
    }
    if (isError) {
      setLoader(true)
      setInterval(() => {
        setLoader(false)
        reset()
      }, 1500)
      toast.error('Failed to create New Account', {
        id: 'newAccountFail'
      })
    }
  })

  return (
    <>
      <AuthContainer>
{
        !loader

          ? <FormLogin onSubmit={handleSubmit(onSubmit)}>
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

          : <ColorRing />}
      </AuthContainer>
      <Toaster />
    </>
  )
}

export default CreateAccount
