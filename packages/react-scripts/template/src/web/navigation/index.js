import { SidePanelNavigator } from '@utilitywarehouse/william-sdk';
import BrowserContainerModule from 'modules/browserContainer';
import RootNavigator from './tabs';

import OneScreen from 'screens/one';
import TwoScreen from 'screens/two';
import ThreeScreen from 'screens/three';
import FourScreen from 'screens/four';

import Modals from 'screens/modals';

const MainMenu = RootNavigator({
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

const Root = SidePanelNavigator(
  { Root: { path: 'root', screen: MainMenu } },
  {
    Search: { screen: Modals.Search },
    Account: { screen: Modals.Account },
  }
);

export default BrowserContainerModule.wrap(Root);
