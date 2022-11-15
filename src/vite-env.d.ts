/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API: string;
    readonly VITE_GRAPHQL_API: string;
    readonly VITE_DEFAULT_USER_ICON: string;
    readonly VITE_NAME: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
