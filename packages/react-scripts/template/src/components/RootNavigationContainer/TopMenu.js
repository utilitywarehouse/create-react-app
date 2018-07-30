import React from 'react'
import PropTypes from 'prop-types'
import { Tabs, ViewPropTypes, themedComponent } from '@utilitywarehouse/william-sdk'

const TopMenu = ({ navigateHandler, isMenuSelected, style, onlyIcons, contentStyle }) => (
  <Tabs style={style} contentStyle={contentStyle}>
    <Tabs.Tab
      title={!onlyIcons && 'Counter'}
      size={122}
      icon="git-network"
      selected={isMenuSelected('One')}
      onPress={navigateHandler('One')}
    />
    <Tabs.Tab
      title={!onlyIcons && 'Modal example'}
      icon="people"
      selected={isMenuSelected('Two')}
      onPress={navigateHandler('Two')}
    />
    <Tabs.Tab
      title={!onlyIcons && 'Three'}
      icon="book-outline"
      selected={isMenuSelected('Three')}
      onPress={navigateHandler('Three')}
    />
    <Tabs.Tab
      title={!onlyIcons && 'Four'}
      icon="school"
      selected={isMenuSelected('Four')}
      onPress={navigateHandler('Four')}
    />
  </Tabs>
)

TopMenu.propTypes = {
  navigateHandler: PropTypes.func,
  isMenuSelected: PropTypes.func,
  style: ViewPropTypes.style,
}

export default themedComponent({
  name: 'TopMenu',
  styles: { justifyContent: 'space-evenly', width: '100%', marginTop: 18 },
  stylesToProps: 'contentStyle',
})(TopMenu)
