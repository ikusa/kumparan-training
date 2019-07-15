import { Action } from '../types';
type State = {
  counter: number;
};
let initialState: State = {
  counter: 0
};

export default function counterReducer(
  state: State = initialState,
  action: Action
) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}
