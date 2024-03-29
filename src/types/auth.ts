export type User = {
    name: string;
    icon_image: string;
    email: string;
    email_verified: boolean;
    CreatedAt: string;
};

export type LoginCredentials = {
    email: string;
    password: string;
};

export type RegisterCredentials = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export type ResetPasswordCredentials = {
    name: string;
    email: string;
};

export type LoginResponse = {
    access_token: string;
    refresh_token: string;
    user: User;
};
