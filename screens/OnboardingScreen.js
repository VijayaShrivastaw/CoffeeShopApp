import React from 'react';
import { Dimensions, StyleSheet, View, Text, StatusBar, TouchableOpacity, Image } from 'react-native';
const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {

    return (

        <View style={styles.container}>
            <StatusBar
                backgroundColor="#111111"
            />


            <Image source={require('../assets/onboading.png')}
                style={styles.image}
            />
            <View style={styles.containerSec}>
                <Text style={styles.loveText}>
                    Fall in Love with {'\n'}Coffee in Blissful {'\n'}Delght!
                </Text>
                <Text style={styles.welcomeText}>
                    Welcome to our cozy coffee corner, where {'\n'}every cup is a delightful for you.
                </Text>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('BottomTabNavigator')}>
                    <Text style={styles.buttonText}>
                        Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111',
    },
    loveText: {
        color: '#FFFFFF',
        fontSize: 32,
        fontWeight: '600',
        textAlign: 'center'
    },
    welcomeText: {
        color: '#A2A2A2',
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 12,
        paddingHorizontal: 25,
        fontWeight: '400'
    },
    image: {
        resizeMode: 'stretch',
        flex: 2.5,
        width: width
    },
    button: {
        backgroundColor: '#C67C4E',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
        borderRadius: 16,
        marginTop: 32
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    },
    containerSec: {
        flex: 1,
        padding: 20,
        position: 'relative',
        bottom: 70
    }
});

export default OnboardingScreen;
