import { StackNavigator } from 'react-navigation'
import Menu from 'bindings/LeftMenu'

export default (routes, config = {}) => {
  return StackNavigator(
    {
      Menu: { screen: Menu, navigationOptions: { title: 'Menu' } },
      ...routes,
    },
    {
      cardStyle: { backgroundColor: 'white' },
      ...config,
    }
  )
}
