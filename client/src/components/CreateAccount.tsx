import { AuthContainer } from "./styles/Auth/AuthContainer.styled"
import { ButtonSubmit } from "./styles/Auth/ButtonSubmit.styled"
import { FormLogin } from "./styles/Auth/FormLogin.styled"
import { Input } from "./styles/Auth/Input.styled"
import { useForm } from 'react-hook-form'
import { CreateAccountData } from '../types/authTypes'
import { useCreateAccount } from '../api/AuthHooks/useCreateAccount'

function CreateAccount() {

  const { register, formState: { errors, isDirty, isValid }, handleSubmit, } = useForm<CreateAccountData>({ mode: 'onChange' })

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
          </div>
          <div>
            <label>email</label>
            <Input type='email' {...register('email', { required: true })} />
          </div>
          <div>
            <label>password</label>
            <Input type='password' {...register('password', { required: true })} />
          </div>
          <ButtonSubmit value='Create' />
        </FormLogin>
      </AuthContainer>
    </>
  )
}

export default CreateAccount