import React from 'react'
import PropTypes from 'prop-types'
import { View, DialogModal, Button, Badge, themedComponent } from '@utilitywarehouse/cerdo-sdk'

const Component = ({ style, onOpenPress, isOpen, onRequestClose }) => (
  <View style={style}>
    <Button title="Open modal" onPress={onOpenPress} />
    <DialogModal title="Example modal" isOpen={isOpen} onRequestClose={onRequestClose}>
      <Badge icon="alarm" fitInSquare size={168} />
    </DialogModal>
  </View>
)

Component.propTypes = {
  onOpenPress: PropTypes.func,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
}

const styles = theme => ({
  margin: theme.spacing.medium,
})

export default themedComponent({
  name: 'ModalScreen',
  styles,
  stylesToProps: 'style',
})(Component)
