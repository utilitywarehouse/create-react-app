import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, Button, TextPropTypes, ViewPropTypes } from '@utilitywarehouse/cerdo-sdk'

const Component = ({ add, sub, counter, valueStyle, buttonStyle }) => (
  <View>
    <Text style={valueStyle}>{counter}</Text>
    <Button title="ADD" type="success" display="outline" onPress={add} style={buttonStyle} />
    <Button title="SUB" type="danger" display="outline" onPress={sub} style={buttonStyle} />
  </View>
)

Component.propTypes = {
  add: PropTypes.func,
  sub: PropTypes.func,
  counter: PropTypes.number,
  buttonStyle: ViewPropTypes.style,
  valueStyle: TextPropTypes.style,
}

export default Component
