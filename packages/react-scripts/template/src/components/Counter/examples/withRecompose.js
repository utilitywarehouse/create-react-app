import { compose, withState, withHandlers } from 'recompose'
import Counter from '../index'

const addCounting = compose(
  withState('counter', 'setCounter', 0),
  withHandlers({
    add: ({ setCounter }) => () => setCounter(n => n + 1),
    sub: ({ setCounter }) => () => setCounter(n => n - 1),
  })
)

const Component = addCounting(Counter)

const source = () =>
  `import { compose, withState, withHandlers } from 'recompose'
  
const addCounting = compose(
    withState('counter', 'setCounter', 0),
    withHandlers({
      add: ({ setCounter }) => () => setCounter(n => n + 1),
      sub: ({ setCounter }) => () => setCounter(n => n - 1),
    })
)

export default addCounting(Counter)`

export default {
  title: 'with recompose',
  Component,
  source,
}
