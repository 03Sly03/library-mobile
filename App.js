
import React from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from 'react-native';

import SplashScreen from './screens/SplashScreen';
import LibraryScreen from './screens/LibraryScreen';
import BookScreen from './screens/BookScreen';


const Stack = createStackNavigator();


export default function App() {
  let [fontsLoaded] = useFonts({
    'Yomogi': require('./assets/fonts/Yomogi-Regular.ttf')
  })
  if(!fontsLoaded) {
    return <Text>Loading...</Text>
  }
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash" screenOptions={{
          headerStyle: {
            backgroundColor: 'darkblue',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'Yomogi',
          },
        }}>
          <Stack.Screen name="Splash" component={SplashScreen}  options={{headerShown: false}}/>
          <Stack.Screen name="Library" component={LibraryScreen} />
          <Stack.Screen name="Book" component={BookScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


