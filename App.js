import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import BookScreen from './screens/Book'
import UserScreen from './screens/User'
import DetailsScreen from './screens/Details'


function Books() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#6200EE',
          height: 20 // Specify the height of your custom header
        },
        headerTintColor: "white"
      })}
    >
      <Stack.Screen name="Booklist" options={{ headerShown: false }} component={BookScreen} />
      <Stack.Screen name="Details" options={{ headerBackVisible: false }} component={DetailsScreen} />
    </Stack.Navigator>
  );
}
export default function App() {


  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: { backgroundColor: '#6200EE' },
          tabBarActiveTintColor: 'gold',
          tabBarInactiveTintColor: 'white',
          headerStyle: {
            backgroundColor: '#6200EE',
            height: 40 // Specify the height of your custom header
          }
        })}
      >
        <Tab.Screen
          name="Books"
          component={Books}
          options={{

            tabBarLabel: 'Book',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book-open-blank-variant" color={color} size={size} />
            ),
          }} />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            tabBarLabel: 'User',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
