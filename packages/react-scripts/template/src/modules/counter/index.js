import CounterReducers from './reducers'

export default () => ({
  redux: {
    reducers: {
      ...CounterReducers,
    },
  },
})
