export type LoginData = {
  username: string
  password: string
}

export type CreateAccountData = {
  username: string,
  email: string,
  password: string
}

export type ProfileData = {
  id: string,
  username: string,
  lastName: string,
  firstName: string,
  avatar: string,
  role: string,
  document: string,
  email: string
}
