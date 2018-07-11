import React from 'react'
import PropTypes from 'prop-types'
import { DialogModal, Button, Badge } from '@utilitywarehouse/william-sdk'

const Component = ({ onOpenPress, isOpen, onRequestClose }) => (
  <React.Fragment>
    <Button title="Open modal" onPress={onOpenPress} />
    <DialogModal title="Example modal" isOpen={isOpen} onRequestClose={onRequestClose}>
      <Badge icon="alarm" fitInSquare size={168} />
    </DialogModal>
  </React.Fragment>
)

Component.propTypes = {
  onOpenPress: PropTypes.func,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
}

export default Component
