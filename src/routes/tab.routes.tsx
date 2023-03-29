import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

//Screens imported by screens folder
import { Home, Heart, Profile, Search, More } from '../utils/screens';

export function TabRoutes() {
  //to optimize my code and dont have to make screen.anything
  const { Screen, Navigator } = createBottomTabNavigator();
  const screensData = [
    { screen: Home, label: 'Home', icon: 'home' as const },
    { screen: More, label: 'Adicionar', icon: 'home' as const },
    { screen: Search, label: 'Buscar', icon: 'home' as const },
    { screen: Heart, label: 'Curtidas', icon: 'home' as const },
    { screen: Profile, label: 'Perfil', icon: 'home' as const },
  ];
  return (
    <Navigator>
      {screensData.map((item, index) => (
        <Screen
          options={{
            tabBarIcon: ({ size, color }) => (
              <Feather name={item.icon} color={color} size={size} />
            ),
            headerShown: false,
          }}
          name={item.label}
          component={item.screen}
        />
      ))}
    </Navigator>
  );
}
