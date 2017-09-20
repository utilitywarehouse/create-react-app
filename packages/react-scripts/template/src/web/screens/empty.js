import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default name => () => <Text style={styles.text}>{name}</Text>;

const styles = StyleSheet.create({
  text: {
    padding: 18,
    paddingLeft: 32,
    fontSize: 18,
  },
});
