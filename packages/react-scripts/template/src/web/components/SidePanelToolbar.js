import React from 'react'
import PropTypes from 'prop-types'
import { NavigationActions, Toolbar } from '@utilitywarehouse/william-sdk'

const SidePanelToolbar = ({ navigation, ...props }) => (
  <Toolbar {...props}>
    <Toolbar.Item
      icon="search-outline"
      onPress={() => navigation.dispatch(NavigationActions.navigate({ routeName: 'Search' }))}
    />
    <Toolbar.Fill />
    <Toolbar.Item
      icon="person-outline"
      onPress={() => navigation.dispatch(NavigationActions.navigate({ routeName: 'Account' }))}
    />
  </Toolbar>
)

SidePanelToolbar.propTypes = {
  navigation: PropTypes.any,
}

export default SidePanelToolbar
