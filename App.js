// App.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import MealScreen from './MealScreen';
import ProfileScreen from './ProfileScreen';
import { CalorieProvider } from './CalorieContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <CalorieProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: { backgroundColor: '#2A2D47' },
            tabBarActiveTintColor: '#4ECDC4',
            tabBarInactiveTintColor: '#8B8FA3',
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Home') iconName = 'home';
              else if (route.name === 'Meal') iconName = 'restaurant';
              else if (route.name === 'Profile') iconName = 'person';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Meal" component={MealScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </CalorieProvider>
  );
}
