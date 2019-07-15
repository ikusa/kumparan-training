import createStore from './createStore';
import formReducer from './reducers/formReducer';

let store = createStore(formReducer);
console.log(store.getState());
store.dispatch({ type: 'SET_USERNAME', value: 'Surya' });
console.log(store.getState());
store.dispatch({ type: 'SET_PASSWORD', value: 'Kumparan@123' });
console.log(store.getState());
