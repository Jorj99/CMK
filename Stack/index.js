import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import components from './components';

const Stack = createNativeStackNavigator();

const StackComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={components.Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackComponent;

// EXAMPLE

/*
    <Stack.Screen
        name="Header"
        component={Header}
        options={{title: 'Musics'}}/>
*/
