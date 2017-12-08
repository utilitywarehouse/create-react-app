import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { Layout, Margin } from '@utilitywarehouse/william-ui';
import Left from 'bindings/leftMenu';

export default ({ navigation, router, ...props }) => {
  const { state } = navigation;

  const Component = router.getComponentForState(state);

  const contentNavigation = addNavigationHelpers({
    ...navigation,
    state: state.routes[state.index],
  });

  return (
    <Layout
      style={{ height: '100vh' }}
      left={<Left navigation={navigation} {...props} />}
      center={
        <Margin>
          <Component navigation={contentNavigation} {...props} />
        </Margin>
      }
    />
  );
};
