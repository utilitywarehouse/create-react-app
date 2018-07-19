import React from 'react'
import PropTypes from 'prop-types'
import { addNavigationHelpers } from 'react-navigation'
import { Layout, Margin } from '@utilitywarehouse/william-sdk'
import Left from 'bindings/LeftMenu'

const TabsView = ({ navigation, router, ...props }) => {
  const { state } = navigation

  const Component = router.getComponentForState(state)

  const contentNavigation = addNavigationHelpers({
    ...navigation,
    state: state.routes[state.index],
  })

  return (
    <Layout
      style={{ height: 500 }}
      left={<Left navigation={navigation} {...props} />}
      center={
        <Margin>
          <Component navigation={contentNavigation} {...props} />
        </Margin>
      }
    />
  )
}

TabsView.propTypes = {
  navigation: PropTypes.any,
  router: PropTypes.any,
}

export default TabsView
