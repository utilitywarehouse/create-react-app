import React from 'react'
import {
  createWilliam,
  Provider,
  NavigationModule,
  OverlayModule,
  ThemeModule,
} from '@utilitywarehouse/william-sdk'
import Navigation from './navigation'
import theme from './theme'

import CounterModule from 'modules/counter'

export default function() {
  const config = {
    // Set URI property to use william-core/connect with william-server
    // uri: 'http://127.0.0.1:8080/graphql',
  }
  const william = createWilliam(
    config,
    CounterModule(),
    OverlayModule(),
    ThemeModule(theme),
    NavigationModule({ navigator: Navigation })
  )

  return {
    rootComponent: <Provider william={william} />,
  }
}
