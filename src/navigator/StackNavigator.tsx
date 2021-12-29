import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Pagina1Screen,
  Pagina2Screen,
  Pagina3Screen,
} from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Pagina1Screen" options={{title: 'Página 1'}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title: 'Página 2'}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title: 'Página 3'}} component={Pagina3Screen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
