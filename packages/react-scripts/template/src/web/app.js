import React from 'react';
import { createWilliam, Provider } from '@utilitywarehouse/william-sdk';
import Navigation from './navigation';

import CounterReducers from './modules/counter/reducers';

export default function() {
  const william = createWilliam({
    // Set URI property to use william-core/connect with william-server
    // uri: 'http://127.0.0.1:8080/graphql',
    redux: {
      reducers: {
        ...CounterReducers,
      },
    },
  });

  william.run();

  return {
    rootComponent: (
      <Provider william={william}>
        <Navigation />
      </Provider>
    ),
  };
}
