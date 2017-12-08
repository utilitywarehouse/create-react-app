import React from 'react';
import {
  StyleSheet,
  View,
  MenuCell,
  withTheme,
} from '@utilitywarehouse/william-ui';

const Component = ({ navigateHandler, isMenuSelected, style }) => (
  <View style={[styles.container, style]}>
    <MenuCell
      title="Counter"
      iconName="git-network"
      onPress={navigateHandler('One')}
      isSelected={isMenuSelected('One')}
    />
    <MenuCell
      title="Menu item two"
      iconName="people"
      onPress={navigateHandler('Two')}
      isSelected={isMenuSelected('Two')}
    />
    <MenuCell
      title="Menu item three"
      iconName="book-outline"
      onPress={navigateHandler('Three')}
      isSelected={isMenuSelected('Three')}
    />
    <MenuCell
      title="Menu item four"
      iconName="school"
      onPress={navigateHandler('Four')}
      isSelected={isMenuSelected('Four')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    borderRightWidth: 1,
    minWidth: 240,
    padding: 12,
  },
});

const name = 'LeftMenu';
const mapThemeToProps = (theme, { style }) => ({
  style: [{ borderColor: theme.colors.borders }, style],
});

export default withTheme({ name, mapThemeToProps })(Component);
