import { AuthContainer } from "./styles/Auth/AuthContainer.styled"
import { Input } from "./styles/Auth/Input.styled"
import { Link } from 'react-router-dom'
import { FormLogin } from "./styles/Auth/FormLogin.styled"
import { useForm, useFormState } from 'react-hook-form'
import { ButtonSubmit } from "./styles/Auth/ButtonSubmit.styled"
import { useLogin } from '../api/AuthHooks/useLogin'
import { LoginData } from '../types/authTypes'
import toast, { Toaster } from 'react-hot-toast'
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

// TODO Hacer componente para resetear password
// TODO en error solo mostrar que los datos no son validos

function Login() {

  const navigate = useNavigate()

  const toastLoading = toast.loading('Loading...!', {id: 'load'})

  const { register, reset, formState: { errors, isDirty, isValid }, handleSubmit } = useForm<LoginData>({ mode: "onChange" })

  const { mutate, isLoading, isError, isSuccess, status } = useLogin()

  const onSubmit = (data: LoginData) => {
    console.log('data', data)
    mutate(data)
    
  }

  useEffect(() => {
    if (status === 'loading')  toastLoading
    if (isSuccess)  {
      toast.success('Logeado', {
        id: toastLoading
      })
      navigate('/')
      
    }
    if (isError) {
      toast.error('Wrong credentials', {
        id: toastLoading
      })
      
    }
  }, [onSubmit])

  return (
    <>
      <AuthContainer>
        <FormLogin onSubmit={handleSubmit(onSubmit)}>
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
        <p></p>
      </AuthContainer>
      <Toaster />
    </>
  )
}

export default Login