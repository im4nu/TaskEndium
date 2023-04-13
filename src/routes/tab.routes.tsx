import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

//Screens imported by screens folder
import { Feed } from '../screens/feed';
import { Unicas } from '../screens/unicas';
import { Habitos } from '../screens/habitos';
import { Metas } from '../screens/metas';
import { Home } from '../screens/home';
import { Settings } from '../screens/settings';
import FloatHome from '../screens/home/FloatHome';

export function TabRoutes() {
  //to optimize my code and dont have to make screen.anything
  const { Screen, Navigator } = createBottomTabNavigator();

  return (
    <Navigator 
      screenOptions={{
        tabBarActiveTintColor: '#D2D2D2',
        tabBarInactiveBackgroundColor: '#181818',
        tabBarActiveBackgroundColor: '#181818',
        tabBarStyle: { height: 65 }
      }}>

    <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" color={color} size={size} />
          ),
            headerShown: false
        }}
        name="Home"
        component={Home}
      />

      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="coffee" color={color} size={size} />
          ),
          headerShown: false
        }}
        name="Únicas"
        component={Unicas}
      />
      
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="coffee" color={color} size={size} />
          ),
          headerShown: false
        }}
        name="Hábitos"
        component={Habitos}
      />

      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="coffee" color={color} size={size} />
          ),
          headerShown: false
        }}
        name="Metas"
        component={Metas}
      />
      
      <Screen
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="settings" color={color} size={size} />
          ),
          headerShown: false
        }}
        name="Feed"
        component={Feed}
      />
      
    </Navigator>
  );
}
