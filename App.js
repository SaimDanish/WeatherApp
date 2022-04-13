import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MenuProvider} from 'react-native-popup-menu';
import {createStackNavigator, TransitionSpecs} from '@react-navigation/stack';

import homeScreen from './src/Screen/HomeScreen/homeScreen';
import MapView_class from './src/Screen/Map/Map';
export const Stack = createStackNavigator();
const App = () => {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={homeScreen}
            options={{
              headerShown: false,
              // headerTintColor: '#fff',
            }}
          />
          <Stack.Screen
            name="Map"
            component={MapView_class}
            options={{
              headerShown: false,
              // headerTintColor: '#fff',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>

    //  <MainPage/>
  );
};

export default App;
