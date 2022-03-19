import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import Home from './screens/Home';
 
const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Trending'
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#ddffff'
            },
            headerTintColor: '#0B5508',
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name='Trending'
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;