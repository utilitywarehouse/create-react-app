import { themedComponent, spreadStylesToProps } from '@utilitywarehouse/cerdo-sdk'

import Component from './Counter'

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
