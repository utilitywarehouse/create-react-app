import React from 'react';
import { Text, View, Button } from '@utilitywarehouse/william-ui';
import connector from '../modules/counter/connector';

export default {
  One: {
    screen: connector(({ add, sub, counter }) => (
      <View>
        <Text>{counter}</Text>
        <Button title="ADD" onPress={add} />
        <Button title="SUB" onPress={sub} />
      </View>
    )),
    path: 'one',
    navigationOptions: {
      title: 'One',
    },
  },
};
