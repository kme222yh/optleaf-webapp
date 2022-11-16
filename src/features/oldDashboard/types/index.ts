export type UserInputData = {
    email?: string | null | undefined;
    name?: string | null | undefined;
    icon_image?: FileList | null | undefined;
    password?: string | null | undefined;
    password_confirmed?: string | null | undefined;
};

export type NormalResponse = {
    message: string;
};