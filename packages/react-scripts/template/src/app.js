import React from 'react'
import {
  createWilliam,
  Provider,
  NavigationModule,
  OverlayModule,
  ThemeModule,
  ResponsiveModule,
} from '@utilitywarehouse/william-sdk'
import Navigator from './navigation'
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
    ThemeModule(theme),
    ResponsiveModule(),
    OverlayModule(),
    NavigationModule({ navigator: Navigator })
  )

  return {
    rootComponent: <Provider william={william} />,
  }
}
