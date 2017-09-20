import {
  createNavigationContainer,
  createNavigator,
  TabRouter,
} from 'react-navigation';
import View from './view';

export default (routeConfig, config) => {
  const Router = TabRouter(routeConfig, config);
  const Navigator = createNavigator(Router)(View);
  return createNavigationContainer(Navigator);
};
