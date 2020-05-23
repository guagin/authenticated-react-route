import { AUTHENTICATE, UNAUTHENTICATE } from './constant';

export interface Authenticate {
  type: string;
}

export interface Unauthenticate {
  type: string;
}

export function authenticate(): Authenticate {
  return { type: AUTHENTICATE };
}

export function unauthenticate(): Unauthenticate {
  return {
    type: UNAUTHENTICATE,
  };
}

export type AuthenticationAction = Authenticate | Unauthenticate;
