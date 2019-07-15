import { Action } from './types';
type State = {
  username: string;
  password: string;
};

let initialState: State = {
  username: '',
  password: ''
};

export default function formReducer(
  state: State = initialState,
  action: Action
) {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.value
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.value
      };
    default:
      return state;
  }
}
