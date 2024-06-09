import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions, FlatList, ScrollView } from "react-native";
import TabNavigator from "../navigation/TabNavigator";


const AddItemScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/arrow.png')} />

                </TouchableOpacity>
                <Text style={styles.details}>Details</Text>
                <View></View>
            </View>
          
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor={'#F9F9F9'} />
                <TabNavigator/>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonSecContainer}>
                    <View style={styles.priceContainer}>
                        <Image source={require('../assets/Wallet.png')} style={{}} />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={styles.cash}>Cash/Wallet</Text>
                            <Text style={styles.dollar}>$4.53</Text>
                        </View>
                    </View>
                    <View style={{ width: '20%', alignItems: 'flex-end' }}>
                        <Image source={require('../assets/down.png')} />
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        paddingHorizontal: 24
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 24,
        alignItems: 'center'
    },
    details: {
        fontSize: 16,
        color: '#242424',
        fontWeight: '600'
    },
    button: {
        height: 56,
        backgroundColor: '#C67C4E',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dollar: {
        fontSize: 12,
        color: '#C67C4E',
        fontWeight: '600'
    },
    buttonContainer: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        marginTop: 20,
        position: 'fixed',
        bottom: 10,

    },
    sizeIcon: {
        backgroundColor: '#fff',
        borderColor: '#E3E3E3',
        borderWidth: 1, height: 41,
        width: 90,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    },


    buttonSecContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%'
    },
    cash: {
        fontSize: 14,
        color: '#242424',
        fontWeight: '600'
    }

})

export default AddItemScreen