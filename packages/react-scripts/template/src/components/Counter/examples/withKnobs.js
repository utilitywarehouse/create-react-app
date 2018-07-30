import React from 'react'
import { number } from '@storybook/addon-knobs'

import Counter from '../index'

const numberKnob = () => number('counter', 1)

const Component = () => (
  <Counter counter={numberKnob()} add={() => alert('add')} sub={() => alert('sub')} />
)

const source = () =>
  `export default () => (
  <Counter
    counter={${numberKnob()}}
    add={() => alert('add')}
    sub={() => alert('sub')}
  />`

export default {
  title: 'with knobs',
  Component,
  source,
}
