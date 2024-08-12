/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BACKEND_URL: string; // Use VITE_ prefix
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
