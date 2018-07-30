import Container from 'components/RootNavigationContainer'
import { mapProps } from 'recompose'

const mapNavigationProps = ({ navigation, ...props }) => ({
  ...props,
  navigateHandler: screenName => () => navigation.navigate(screenName),
  isMenuSelected: screenName =>
    navigation.state.routes &&
    navigation.state.routes[navigation.state.index].routeName.includes(screenName),
})

export default mapProps(mapNavigationProps)(Container)
