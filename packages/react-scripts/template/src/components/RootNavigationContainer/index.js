import React from 'react'
import PropTypes from 'prop-types'
import { Layout, responsiveThemedComponent } from '@utilitywarehouse/william-sdk'
import LeftMenu from './LeftMenu'
import TopMenu from './TopMenu'

const Mobile = ({ children, ...props }) => (
  <Layout header={<TopMenu onlyIcons {...props} />} center={children} />
)

const Tablet = ({ children, ...props }) => (
  <Layout header={<TopMenu {...props} />} center={children} />
)

const Desktop = ({ children, ...props }) => (
  <Layout left={<LeftMenu {...props} />} center={children} />
)

Mobile.propTypes = {
  children: PropTypes.node,
}

Desktop.propTypes = {
  children: PropTypes.node,
}

export default responsiveThemedComponent(
  {
    phone: Mobile,
    tablet: Tablet,
    desktop: Desktop,
  },
  Desktop
)
