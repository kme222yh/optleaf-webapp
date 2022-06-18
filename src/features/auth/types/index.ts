export type User = {
  id: string
  email: string
}

export type LoginCredentials = {
  email: string
  password: string
}

export type RegisterCredentials = {
  email: string
  password: string
  password_confirmation: string
}

export type LoginResponse = {
  access_token: string
  refresh_token: string
}
