declare module '@emailjs/browser' {
  export interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  export interface SendFormOptions {
    publicKey?: string;
  }

  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, unknown>,
    publicKey?: string
  ): Promise<EmailJSResponseStatus>;

  export function sendForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement | string,
    publicKey?: string | SendFormOptions
  ): Promise<EmailJSResponseStatus>;

  export function init(publicKey?: string): void;
} 