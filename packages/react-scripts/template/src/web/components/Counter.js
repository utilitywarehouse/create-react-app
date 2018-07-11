import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  Button,
  themedComponent,
  spreadStylesToProps,
} from '@utilitywarehouse/william-sdk'

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
  buttonStyle: View.propTypes.style,
  valueStyle: View.propTypes.style,
}

export default themedComponent({
  name: 'Counter',
  styles: theme => ({
    value: {
      fontSize: theme.typography.fontSize.huge,
      fontWeight: theme.typography.fontWeight.bold,
      margin: theme.spacing.medium,
      textAlign: 'center',
      backgroundColor: theme.canvas.background,
      borderRadius: theme.border.radius.base,
      padding: theme.spacing.medium,
    },
    button: {
      margin: theme.spacing.medium,
      marginTop: 0,
    },
  }),
  stylesToProps: spreadStylesToProps,
})(Component)
