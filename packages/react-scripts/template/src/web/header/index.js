import React from 'react';
import { Header } from '@utilitywarehouse/william-ui/layout';
import { Button } from '@utilitywarehouse/william-ui/components';

export default props => (
  <Header
    left={
      <Button
        iconName="home"
        title="William APP"
        onPress={() => props.navigation.navigate('One')}
      />
    }
  />
);
