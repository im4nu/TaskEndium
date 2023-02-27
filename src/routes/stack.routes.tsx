import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth } from '../screens/auth';

const { Screen, Navigator } = createNativeStackNavigator();

// Screen imporations from src/screens
import { TabRoutes } from './tab.routes';

export function StackRoutes() {
  return (
    <Navigator>
      <Screen name="Auth" component={Auth} />
      <Screen name="Tabs" component={TabRoutes} />
    </Navigator>
  );
}
