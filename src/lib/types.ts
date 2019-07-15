export type Reducer = (state: Object, action: Action) => Object;
export type Action =
  | {
      type: 'INCREMENT';
      value?: any;
    }
  | {
      type: 'SET_USERNAME';
      value?: any;
    }
  | {
      type: 'SET_PASSWORD';
      value?: any;
    };
