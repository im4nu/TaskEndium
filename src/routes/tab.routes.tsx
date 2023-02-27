import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FiCoffee, FiHome, FiSettings } from 'react-icons/fi';
import { Feed } from '../screens/feed';

//Screens imported by screens folder
import { Home } from '../screens/home';
import { Settings } from '../screens/settings';

export function TabRoutes() {
  //to optimize my code and dont have to make screen.anything
  const { Screen, Navigator } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 65,
        },
        // tabBarHideOnKeyboard: Platform.OS !== 'ios',
      }}
    >
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => <FiHome color={color} size={size} />,
        }}
        name="Home"
        component={Home}
      />
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <FiCoffee color={color} size={size} />
          ),
        }}
        name="Feed"
        component={Feed}
      />
      <Screen
        options={{
          tabBarIcon: ({ color, size }) => (
            <FiSettings color={color} size={size} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Navigator>
  );
}
