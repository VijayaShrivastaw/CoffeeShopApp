import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ViewPager from '@react-native-community/viewpager';
import { NavigationContainer } from '@react-navigation/native';
import PickUp from '../screens/PickUp';
import Delivery from '../screens/Delivery';

const Tab = createMaterialTopTabNavigator();

function TabNavigator() {
  return (
  
     <Tab.Navigator
    //   tabBarOptions={{
    //     scrollEnabled: true,
    //   }}
    //   tabBar={(props) => <ViewPager {...props} />}
    >
      {/* Define your tab screens here */}
      {/* For example: */}
      <Tab.Screen name="Delivery" component={Delivery} />
      <Tab.Screen name="PickUp" component={PickUp} />
    </Tab.Navigator>

  );
}
export default TabNavigator;