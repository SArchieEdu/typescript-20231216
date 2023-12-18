declare module "lodash" {
  export function calculate(a: number, b: number): number;
}

// declare var __ENV__: string;

declare global {
  var __ENV__: string;

  interface Window {
    Logger?: {
      log(): void;
    };
  }
}

export {};
