import { createReducer } from '@utilitywarehouse/william-sdk'

export const KEY = 'COUNTER'
export const handlers = {
  COUNTER_ADD: state => state + 1,
  COUNTER_SUB: state => state - 1,
}
export const reducer = createReducer(0, handlers)
export default { [KEY]: reducer }
