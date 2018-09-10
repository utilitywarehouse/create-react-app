import React from 'react'
import {
  create,
  Provider,
  NavigationModule,
  OverlayModule,
  ThemeModule,
  ResponsiveModule,
} from '@utilitywarehouse/cerdo-sdk'
import Navigator from './navigation'
import theme from './theme'

import CounterModule from 'modules/counter'

export default function() {
  const config = {
    // Set URI property to use cerdo-core/connect with cerdo-server
    // uri: 'http://127.0.0.1:8080/graphql',
  }
  const instance = create(
    config,
    NavigationModule({ navigator: Navigator }),
    CounterModule(),
    OverlayModule({}),
    ResponsiveModule({}),
    ThemeModule(theme)
  )

  return {
    rootComponent: <Provider instance={instance} />,
  }
}
