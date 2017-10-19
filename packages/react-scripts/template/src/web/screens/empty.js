import React from 'react';
import { Text, StyleSheet } from '@utilitywarehouse/william-ui';

export default name => () => <Text style={styles.text}>{name}</Text>;

const styles = StyleSheet.create({
  text: {
    padding: 18,
    paddingLeft: 32,
    fontSize: 18,
  },
});
