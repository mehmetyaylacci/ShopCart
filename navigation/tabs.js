import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CardsScreen from '../screens/CardsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  StyleSheet,
} from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator screenOptions={{
        tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        tabBarActiveTintColor: '#fff',
        tabBarStyle: {
          position: 'absolute',
          borderTopColor: 'rgba(0, 0, 0, .2)',
          borderRadius: 25,
          alignSelf: 'center',
          marginLeft: 10,
          marginRight: 10,
        },
        tabBarIconStyle: {
          marginTop: 7,
          marginLeft: 5,
          marginRight: 5,
        },
        headerShown: false,
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#1473E6" size={24} />
          ),
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="face-profile" color="#1473E6" size={24} />
          ),
        }}/>
        <Tab.Screen name="Cards" component={CardsScreen} options={{
          tabBarLabel: 'Cards',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="card-search-outline" color="#1473E6" size={24} />
          ),
        }}/>
      </Tab.Navigator>
  );
}

export default MyTabs;