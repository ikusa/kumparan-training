import { Action, Reducer } from './types';

export default function createStore(reducers: Reducer) {
  let globalState: Object = undefined;
  let getState = () => globalState; //mapStateToProps
  let dispatch = (action: Action) => {
    let newState = reducers(globalState, action);
    globalState = newState;
  };
  let subscribe = (listener: Function) => {
    //connect => Provider
    //call listerner to update the component in ComponentDidMount
  };
  dispatch({ type: undefined });
  return {
    getState,
    dispatch,
    subscribe
  };
}
