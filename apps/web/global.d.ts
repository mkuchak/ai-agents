// Global type declarations for React Router v7

// Handle React Router's generated types that reference .js files
declare module "*.js" {
  const content: any;
  export default content;
}

// React Router generated +types modules
declare module "./+types/*" {
  export namespace Route {
    export type LinksFunction = () => Array<{
      rel: string;
      href: string;
      [key: string]: string | undefined;
    }>;
    export interface ErrorBoundaryProps {
      error: Error;
    }
    export interface MetaArgs {
      [key: string]: any;
    }
  }
}

// SVG imports for Vite
declare module "*.svg" {
  const content: string;
  export default content;
}

// Vite environment variables
interface ImportMetaEnv {
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
