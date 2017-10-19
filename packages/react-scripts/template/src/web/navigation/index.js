import { BrowserAppContainer } from '@utilitywarehouse/william-sdk/navigation';
import RootNavigator from './tabs';

import OneScreen from '../screens/one';
import TwoScreen from '../screens/two';
import ThreeScreen from '../screens/three';
import FourScreen from '../screens/four';

const Root = RootNavigator({
  One: { path: 'one', screen: OneScreen, navigationOptions: { title: 'One' } },
  Two: { path: 'two', screen: TwoScreen, navigationOptions: { title: 'Two' } },
  Three: {
    path: 'three',
    screen: ThreeScreen,
    navigationOptions: { title: 'Three' },
  },
  Four: {
    path: 'four',
    screen: FourScreen,
    navigationOptions: { title: 'Four' },
  },
});

export default BrowserAppContainer(Root);
