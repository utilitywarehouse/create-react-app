import React from 'react';
import {
  createWilliam,
  Provider,
  ThemeProvider,
} from '@utilitywarehouse/william-sdk';
import BrowserContainerModule from 'modules/browserContainer';
import Navigation from './navigation';
import theme from './theme';

import CounterReducers from './modules/counter/reducers';

export default function() {
  const config = {
    // Set URI property to use william-core/connect with william-server
    // uri: 'http://127.0.0.1:8080/graphql',
    redux: {
      reducers: {
        ...CounterReducers,
      },
    },
  };
  const william = createWilliam(config, BrowserContainerModule);

  return {
    rootComponent: (
      <ThemeProvider theme={theme}>
        <Provider william={william}>
          <Navigation />
        </Provider>
      </ThemeProvider>
    ),
  };
}
