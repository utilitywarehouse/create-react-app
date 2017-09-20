import { createReducer } from '@utilitywarehouse/william-redux';

export const KEY = 'COUNTER';
export const handlers = {
  COUNTER_ADD: (state, action) => state + 1,
  COUNTER_SUB: (state, action) => state - 1,
};
export const reducer = createReducer(0, handlers);
export default { [KEY]: reducer };
