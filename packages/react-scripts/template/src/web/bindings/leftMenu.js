import LeftMenu from 'components/leftMenu';
import { mapProps } from 'recompose';

const mapNavigationProps = ({ navigation, ...props }) => ({
  ...props,
  navigateHandler: screenName => () => navigation.navigate(screenName),
  isMenuSelected: screenName =>
    navigation.state.routes[navigation.state.index].routeName.includes(
      screenName
    ),
});

export default mapProps(mapNavigationProps)(LeftMenu);
