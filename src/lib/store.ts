import createStore from './createStore';
import counterReducer from './counterReducer';

let store = createStore(counterReducer);
console.log(store.getState());
