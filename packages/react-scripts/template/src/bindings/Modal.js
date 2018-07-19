import Modal from 'components/Modal'
import { withStateHandlers } from 'recompose'

export default withStateHandlers(
  {
    isOpen: false,
  },
  {
    onRequestClose: () => () => ({ isOpen: false }),
    onOpenPress: () => () => ({ isOpen: true }),
  }
)(Modal)
