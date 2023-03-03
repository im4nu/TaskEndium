import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

//Screens imported by screens folder
import { Feed } from '../screens/feed';
import { Home } from '../screens/home';
import { Settings } from '../screens/settings';

export function TabRoutes() {
  //to optimize my code and dont have to make screen.anything
  const { Screen, Navigator } = createBottomTabNavigator();

  return (
    <Navigator>
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="coffee" color={color} size={size} />
          ),
        }}
        name="Feed"
        component={Feed}
      />
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Navigator>
  );
}
