import { BrowserAppContainer } from '@utilitywarehouse/william-sdk/navigation';
import RootNavigator from './tabs';

import OneScreen from '../screens/one';
import TwoScreen from '../screens/two';
import ThreeScreen from '../screens/three';
import FourScreen from '../screens/four';

const Root = RootNavigator({
  ...OneScreen,
  ...TwoScreen,
  ...ThreeScreen,
  ...FourScreen,
});

export default BrowserAppContainer(Root);
