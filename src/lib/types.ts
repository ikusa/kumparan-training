export type Reducer = (state: Object, action: Action) => Object;
export type Action = {
  type: string;
  value?: any;
};
