import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Delivery = () => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#F9F9F9', paddingVertical: 24 }}>
            <Text style={styles.addressText}>Delivery Address</Text>
            <Text style={styles.name}>Jl. Kpg Sutoyo</Text>
            <Text style={styles.fullAdd}>Kpg. Sutoyo No. 620, Bilzen, Tanjungbalai.</Text>
            <View style={{
                    borderBottomColor: '#A2A2A2',
                    borderBottomWidth: 0.5,
                    marginVertical: 15

                }}></View>
            <View style={{ flexDirection: 'row',alignItems:'center',marginTop:10}}>
                <View style={{ flexDirection: 'row',width:'70%',alignItems:'center', }}>
                    <Image source={require('../assets/Image.png')} style={styles.image} />
                    <View style={{marginLeft:25}}>
                        <Text style={{color:'#242424',fontSize:16,fontWeight:'600'}}>Caffe Mocha</Text>
                        <Text style={{color:'#A2A2A2',fontSize:12,fontWeight:'400'}}>Deep Foam</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width:'30%',justifyContent:'space-between',alignItems:'center' }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/minus.png')} />
                    </TouchableOpacity>
                    <Text>1</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/pluss.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    addressText: {
        color: '#242424',
        fontSize: 16,
        fontWeight: '600'
    },
    name: {
        color: '#313131',
        fontSize: 14,
        fontWeight: '600',
        marginTop: 12,
        marginBottom: 8
    },
    fullAdd: {
        color: '#A2A2A2',
        fontSize: 12,
        fontWeight: '400'
    },
    image: {

    }
})
export default Delivery