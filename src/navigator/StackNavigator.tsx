import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Pagina1Screen, Pagina2Screen, Pagina3Screen, Pagina4Screen } from '../screens';

const Stack = createStackNavigator();

const  StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pagina1Screen" component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" component={Pagina3Screen} />
      <Stack.Screen name="Pagina4Screen" component={Pagina4Screen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;