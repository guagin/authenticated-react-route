import { AuthenticationAction } from './action';
import { AUTHENTICATE, UNAUTHENTICATE } from './constant';
import { Current } from './type';

export default function currentReducer(
  state: Current = {
    userId: '',
    isAuthenticated: false,
  },
  action: AuthenticationAction
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
        userId: '',
        isAuthenticated: false,
      };
  }
  return state;
}
