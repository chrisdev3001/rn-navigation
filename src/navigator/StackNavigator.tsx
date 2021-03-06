import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Page1Screen } from '../screens/Page1Screen'
import { Page2Screen } from '../screens/Page2Screen'
import { Page3Screen } from '../screens/Page3Screen'
import { UserScreen } from '../screens/UserScreen';

export type RootStackParams = {
  Page1Screen: undefined,
  Page2Screen: undefined,
  Page3Screen: undefined,
  UserScreen: { id: number, name: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Page3Screen"
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
          
        },
        cardStyle: {
          backgroundColor: '#fff'
        }
      }}
    >
      <Stack.Screen name="Page1Screen" options={{ title: 'Screen 1' }} component={Page1Screen} />
      <Stack.Screen name="Page2Screen" options={{ title: 'Screen 2' }} component={Page2Screen} />
      <Stack.Screen name="Page3Screen" options={{ title: 'Screen 3' }} component={Page3Screen} />
      <Stack.Screen name="UserScreen" options={{ title: 'User Screen' }} component={UserScreen} />      
    </Stack.Navigator>
  );
}