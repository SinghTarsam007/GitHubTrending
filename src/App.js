import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favourites from './screens/Favourites';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Stack = createNativeStackNavigator();

const Tabs = createBottomTabNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Tabs.Navigator
          initialRouteName='Trending'
          screenOptions={({ route }) => ({
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#DE0808'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold',
            },
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name == 'Trending') {
                iconName = faGithub
              }
              else {
                iconName = faBookmark
              }
              return <FontAwesomeIcon icon={iconName} color={color} size={25} />
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: {
              fontSize: 17,
              fontWeight: 'bold'
            },
          })}
        >
          <Tabs.Screen
            name='Trending'
            component={Home}
          />
          <Tabs.Screen
            name='Favourites'
            component={Favourites} />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;