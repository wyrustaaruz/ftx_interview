declare global {
  interface Window {
    __PUBLIC_URL__: string;
    __FTX_ENDPOINT_BASE__: string;
    __AUTH_ENABLED__: boolean;
  }
}

export {};
