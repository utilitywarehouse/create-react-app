import React from 'react'
import PropTypes from 'prop-types'
import ReactNative, * as reactNative from 'react-native-web'

import constant from 'lodash/constant'
import flow from 'lodash/fp/flow'
import mapValues from 'lodash/fp/mapValues'
import set from 'lodash/fp/set'

reactNative.ViewPropTypes.style = PropTypes.any

const createStyles = mapValues(value => `StyleSheet.create(${JSON.stringify(value)})`)

const View = props => <div {...props} />
View.propTypes = mapValues(constant(PropTypes.any), reactNative.ViewPropTypes)

const Text = props => <span {...props} />
Text.propTypes = mapValues(constant(PropTypes.any), reactNative.Text.propTypes)

const applyMock = flow([
  set('StyleSheet.create', createStyles),
  set('View', View),
  set('Text', Text),
])

exports = applyMock(reactNative)
module.exports = applyMock(ReactNative)
