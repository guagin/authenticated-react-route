import { Authenticate, Unauthenticate } from './action';
import { AUTHENTICATE, UNAUTHENTICATE } from './constants';
import { Current } from 'types';

export default function currentReducer(
  state: Current = {
    userId: null,
    isAuthenticated: false,
  },
  action: Authenticate | Unauthenticate
): Current {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        userId: 'placeholder-userId',
        isAuthenticated: true,
      };

    case UNAUTHENTICATE:
      return {
        userId: null,
        isAuthenticated: false,
      };
  }
  return state;
}
