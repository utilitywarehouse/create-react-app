import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import {
  withPropsOf,
  withThemeOf,
  Header,
  Separator,
  JSX,
} from '@utilitywarehouse/william-storybook-utils'

import * as example from './examples'

import Counter from './index'
import CounterDocGen from './Counter'

storiesOf('cerdo|Components', module)
  .addDecorator(withKnobs)
  .addDecorator(withPropsOf(CounterDocGen))
  .addDecorator(withThemeOf(Counter))
  .add('Counter', () => (
    <React.Fragment>
      <Header title="Counter" description="Simple counter component..." />
      <Separator />
      <JSX {...example.withKnobs} />
      <JSX {...example.withRecompose} />
    </React.Fragment>
  ))
