import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import AddItemScreen from '../screens/AddItemScreen';
import 'react-native-gesture-handler';


const Stack = createStackNavigator();

const StackNavigatorScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

                <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
                <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
                <Stack.Screen name="AddItemScreen" component={AddItemScreen} />

                

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigatorScreen