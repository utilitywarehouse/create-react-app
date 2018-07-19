import React from 'react'
import { withProps } from 'recompose'
import PropTypes from 'prop-types'
import { Text, StyleSheet } from '@utilitywarehouse/william-sdk'

const EmptyScreen = ({ name }) => <Text style={styles.text}>{name}</Text>
EmptyScreen.displayName = 'EmptyScreen'
EmptyScreen.propTypes = {
  name: PropTypes.string,
}

export default name => withProps({ name })(EmptyScreen)

const styles = StyleSheet.create({
  text: {
    padding: 18,
    paddingLeft: 32,
    fontSize: 18,
  },
})
