import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { Layout } from '@utilitywarehouse/william-ui/layout';
import Left from '../../left';
import Header from '../../header';

export default ({ navigation, router, ...props }) => {
  const { state } = navigation;

  const Component = router.getComponentForState(state);

  const contentNavigation = addNavigationHelpers({
    ...navigation,
    state: state.routes[state.index],
  });

  return (
    <Layout
      header={<Header navigation={navigation} {...props} />}
      left={<Left navigation={navigation} {...props} />}
      center={<Component navigation={contentNavigation} {...props} />}
    />
  );
};
