interface DirectionArray {
    // (文字型のキー):  string
    [index: string]: Array<string> | string;
}

export type ErrorMessage = {
    code: string;
    detail: DirectionArray;
    message: string;
};
