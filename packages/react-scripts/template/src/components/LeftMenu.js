import React from 'react'
import PropTypes from 'prop-types'
import { View, Button, themedComponent } from '@utilitywarehouse/william-sdk'

const LeftMenu = ({ navigateHandler, isMenuSelected, style }) => (
  <View style={style}>
    <Button
      title="Counter"
      icon="git-network"
      display={isMenuSelected('One') ? 'outline' : 'transparent'}
      type={isMenuSelected('One') ? 'primary' : 'normal'}
      onPress={navigateHandler('One')}
    />
    <Button
      title="Modal example"
      icon="people"
      display={isMenuSelected('Two') ? 'outline' : 'transparent'}
      type={isMenuSelected('Two') ? 'primary' : 'normal'}
      onPress={navigateHandler('Two')}
    />
    <Button
      title="Menu item three"
      icon="book-outline"
      display={isMenuSelected('Three') ? 'outline' : 'transparent'}
      type={isMenuSelected('Three') ? 'primary' : 'normal'}
      onPress={navigateHandler('Three')}
    />
    <Button
      title="Menu item four"
      icon="school"
      display={isMenuSelected('Four') ? 'outline' : 'transparent'}
      type={isMenuSelected('Four') ? 'primary' : 'normal'}
      onPress={navigateHandler('Four')}
    />
  </View>
)

LeftMenu.propTypes = {
  navigateHandler: PropTypes.func,
  isMenuSelected: PropTypes.func,
  style: View.propTypes.style,
}

const styles = theme => ({
  flex: 1,
  alignSelf: 'stretch',
  flexDirection: 'column',
  borderRightWidth: 1,
  minWidth: 240,
  padding: theme.spacing.medium,
  borderColor: theme.border.color,
})

export default themedComponent({
  name: 'LeftMenu',
  styles,
  stylesToProps: 'style',
})(LeftMenu)
