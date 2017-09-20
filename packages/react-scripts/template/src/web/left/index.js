import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '@utilitywarehouse/william-ui/foundation';
import { ActionCell } from '@utilitywarehouse/william-ui';

export default ({ style, navigation }) => (
  <View style={[styles.container, style]}>
    <ActionCell
      title="Counter"
      iconName="git-network"
      onPress={() => navigation.navigate('One')}
    />
    <ActionCell
      title="Menu item two"
      iconName="people"
      onPress={() => navigation.navigate('Two')}
    />
    <ActionCell
      title="Menu item three"
      iconName="book-outline"
      onPress={() => navigation.navigate('Three')}
    />
    <ActionCell
      title="Menu item four"
      iconName="school"
      onPress={() => navigation.navigate('Four')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    borderRightWidth: 1,
    borderColor: Colors.THEME.BORDERS,
    minWidth: 240,
    paddingTop: 4,
  },
});
