/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API: string;
    readonly VITE__GRAPHQL_API: string;
    readonly VITE__DEFAULT_USER_ICON: string;
    readonly VITE__NAME: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
