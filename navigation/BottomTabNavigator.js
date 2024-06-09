import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import AddItemScreen from '../screens/AddItemScreen';
// import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        // <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}>
                <Tab.Screen name="HomeScreen" component={HomeScreen} />
                <Tab.Screen name="AddItemScreen" component={AddItemScreen} />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}

export default BottomTabNavigator