import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Main } from '../screens/Main';
import { Profile } from '../screens/Profile';

const Stack = createNativeStackNavigator();

export function AppStackRoutes() {
      return (
            <Stack.Navigator
                  initialRouteName="Main"
                  screenOptions={{
                        headerShown: false,
                  }}
            >
                  <Stack.Screen name="Main" component={Main} />
                  <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
      );
};
