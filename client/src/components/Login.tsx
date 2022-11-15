import React, { useEffect, useState } from 'react'
import { AuthContainer } from './styles/Auth/AuthContainer.styled'
import { Input } from './styles/Auth/Input.styled'
import { Link, useNavigate } from 'react-router-dom'
import { FormLogin } from './styles/Auth/FormLogin.styled'
import { useForm } from 'react-hook-form'
import { ButtonSubmit } from './styles/Auth/ButtonSubmit.styled'
import { useLogin } from '../api/AuthHooks/useLogin'
import { LoginData } from '../types/authTypes'
import toast, { Toaster } from 'react-hot-toast'
import { ColorRing } from 'react-loader-spinner'
import useStore from '../store/useStore'

// TODO Hacer componente para resetear password

function Login () {
  const navigate = useNavigate()
  const addUsername = useStore(state => state.addUsername)
  const { register, reset, getValues, formState: { errors, isDirty, isValid }, handleSubmit } = useForm<LoginData>({ mode: 'onChange' })
  const { mutate, isError, isSuccess } = useLogin()
  const [loader, setLoader] = useState<boolean>(false)
  const onSubmit = (data: LoginData) => mutate(data)
  const values = getValues()

  useEffect(() => {
    if (isSuccess) {
      toast.success('Logeado', {
        id: 'success'
      })
      setLoader(true)
      addUsername(values.username) // vuelve a quedar vacio porque se resetea el formulario
      setInterval(() => {
        navigate('/')
        setLoader(false)
      }, 1500)
    }
    if (isError) {
      setLoader(true)
      setInterval(() => {
        setLoader(false)
      }, 1500)
      toast.error('Wrong credentials', {
        id: 'error'
      })
      reset()
    }
  }, [onSubmit])

  return (
    <>
      <AuthContainer>

        {
          !loader

            ? <FormLogin onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign In</h2>
          <div>
            <label >username</label>
            <Input type='text' {...register('username', { required: true })} />
            {errors.username?.type === 'required' && <p>username is required</p>}
          </div>
          <div>
            <label >password</label>
            <Input type='password' maxLength={12} {...register('password', { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/i })} />
            {errors.password?.type === 'pattern' && <p>password must have at least 1 uppercase letter, 1 lowercase letter, 1 number and 8 characters min </p>}
          </div>
          <ButtonSubmit disabled={!isDirty || !isValid} value='Log In' />
          <Link to=''>Forgot your Password?</Link>
          <Link to='/new-account'>Create new Account</Link>
        </FormLogin>

            : <ColorRing />
      }
      </AuthContainer>
      <Toaster />
    </>
  )
}

export default Login
