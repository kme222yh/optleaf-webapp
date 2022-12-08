/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API: string;
    readonly VITE_GRAPHQL_API: string;
    readonly VITE_DEFAULT_USER_ICON: string;
    readonly VITE_NAME: string;
    readonly VITE_FILE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
