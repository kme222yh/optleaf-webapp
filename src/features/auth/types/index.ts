export type User = {
  email: string
  name: string
  icon_image: string
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
  user: User
}

export type Error = {
  code: string
  detail: any
  message: string
}