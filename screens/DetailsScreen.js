import React from "react";
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions, FlatList, ScrollView } from "react-native";

const Data = [
    {
        id: 1,
        size: 'S'
    },
    {
        id: 2,
        size: 'M'
    },
    {
        id: 3,
        size: 'L'
    },
]
const DetailsScreen = ({ route, navigation }) => {
    const { width, height } = Dimensions.get('window');

    let data = route.params.item
    console.log(data)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/arrow.png')} />

                </TouchableOpacity>
                <Text style={styles.details}>Details</Text>
                <Image source={require('../assets/hurt.png')} />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor={'#F9F9F9'} />

                <View style={{}}>
                    <Image source={{ uri: data.image }} style={{
                        height: 202,
                        width: 312,

                        resizeMode: 'stretch',
                        borderRadius: 10,
                        marginVertical: 24
                    }} />
                </View>
                <View>
                    <Text style={styles.coffee}>{data.title}</Text>
                </View>
                <View style={styles.iconBox}>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontSize: 12, fontWeight: '400', color: '#A2A2A2' }}>Ice/Hot</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/bike.png')} />
                        <Image source={require('../assets/icon.png')} />
                        <Image source={require('../assets/slot.png')} />
                    </View>

                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Image source={require('../assets/Vector.png')} />
                    <Text style={{ color: '#242424', fontSize: 16, fontWeight: '600' }}> 4.8</Text>
                    <Text style={{ color: '#A2A2A2', fontSize: 12, fontWeight: '400' }}> (230)</Text>

                </View>
                <View style={{
                    borderBottomColor: '#A2A2A2',
                    borderBottomWidth: 0.5,
                    marginVertical: 15

                }}></View>

                <Text style={{ fontSize: 16, fontWeight: '600', color: '#242424' }}>
                    Description</Text>
                <View style={{ marginVertical: 15 }}>
                    <Text style={{ color: '#A2A2A2', fontSize: 14, fontWeight: '300' }}>
                        {data.description}
                    </Text>
                </View>
                <Text style={{ color: '#242424', fontSize: 16, fontWeight: '600', marginBottom: 15 }}>
                    Size
                </Text>
                <View style={{ marginBottom: 30 }}>
                    <FlatList
                        data={Data}
                        horizontal={true}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.sizeIcon}>
                                <Text>{item.size}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>


            </ScrollView>
            <View style={styles.buttonContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, color: '#909090', fontWeight: '400' }}>Price</Text>
                    <Text style={styles.dollar}>$4.53</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddItemScreen')}>
                    <Text style={{ color: '#FFFFFF', fontSize: 16, fontWeight: '600' }}>Buy Now</Text>
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
        width: 217,
        backgroundColor: '#C67C4E',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dollar: {
        fontSize: 18,
        color: '#C67C4E',
        fontWeight: '600'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    iconContainer: {
        flexDirection: 'row',
        width: '40%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    coffee: {
        color: '#242424',
        fontSize: 20,
        fontWeight: '600'
    },
    iconBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8
    }

})

export default DetailsScreen