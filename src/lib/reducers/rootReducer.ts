import { Reducer, Action } from '../types';
import counterReducer from './counterReducer';
import formReducer from './formReducer';

type CombineReducer = { [key: string]: Reducer };

function rootReducer(reducersObj: CombineReducer) {
  return (state: Object, action: Action) => {
    let preserveState = {};
    let keys = Object.keys(reducersObj);
    for (let key of keys) {
      let reducer = reducersObj[key];
      preserveState[key] = reducer(state[key], action);
    }
    return preserveState;
  };
}

let rootStateReducer = rootReducer({
  counter: counterReducer,
  form: formReducer
});
let rootState = rootStateReducer({}, { type: null });
console.log('result >>> ', rootState);
