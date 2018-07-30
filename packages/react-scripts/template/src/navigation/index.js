import { SidePanelNavigator, TabNavigator } from '@utilitywarehouse/william-sdk'
import RootNavigationContainer from 'bindings/RootNavigationContainer'

import SidePanelToolbar from 'components/SidePanelToolbar'

import OneScreen from 'screens/One'
import TwoScreen from 'screens/Two'
import ThreeScreen from 'screens/Three'
import FourScreen from 'screens/Four'

import Modals from 'screens/modals'

const MainMenu = TabNavigator(
  {
    One: { path: 'counter', screen: OneScreen, navigationOptions: { title: 'Counter' } },
    Two: { path: 'modal', screen: TwoScreen, navigationOptions: { title: 'Modal' } },
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
  },
  { Container: RootNavigationContainer }
)

const Root = SidePanelNavigator(
  { Root: { path: '', screen: MainMenu } },
  {
    Search: { screen: Modals.Search },
    Account: { screen: Modals.Account },
  },
  SidePanelToolbar
)

export default Root
