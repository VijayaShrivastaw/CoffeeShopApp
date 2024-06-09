import React from "react";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import 'react-native-gesture-handler';
import StackNavigatorScreen from "./navigation/StackNavigatorScreen";
import TabNavigator from "./navigation/TabNavigator";


const App = () => {
  return (
    <>
      {/* <OnboardingScreen/> */}
      {/* < HomeScreen /> */}
      {/* <OverlappingBoxes/> */}
      {/* <BottomTabNavigator /> */}
      <StackNavigatorScreen />


    </>



  )
}

export default App;