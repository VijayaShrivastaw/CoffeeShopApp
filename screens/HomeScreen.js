// src/components/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Animated, StatusBar, StyleSheet, TextInput, Dimensions, Image, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RenderItemScreen from './RenderItemScreen';


const { width, height } = Dimensions.get('window');

const HomeScreen = (navigation) => {
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    const [apiData, setApiData] = useState('')
    const [dataCount, setDataCount] = useState(0);
    const [selectedItems, setSelectedItems] = useState([]);

    const getApiData = async () => {
        let result = await fetch('https://api.sampleapis.com/coffee/hot')
        result = await result.json()
        setApiData(result)

    

    }

    const addToCart = (item) => {
        setSelectedItems([...selectedItems, item]);
      };
    // const removeFromCart = (index) => {
    //   const newCartItems = [...cartItems];
    //   newCartItems.splice(index, 1);
    //   setCartItems(newCartItems);
    // };

    React.useEffect(() => {
        getApiData()
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View style={{ flex: 1, opacity: fadeAnim, backgroundColor: '#F9F9F9' }}>
            <StatusBar backgroundColor={'#111111'} />
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.location}>Location</Text>
                    <Text style={styles.address}>Bilzen, Tanjungbalai</Text>
                    <View style={styles.searchItem}>

                        <View style={styles.searchContainer}>
                            <Image source={require('../assets/search.png')} style={{ height: 20, width: 20 }} />
                            {/* <Icon name="search" size={20} color="#A2A2A2" /> */}
                            <TextInput
                                placeholder="Search Coffee"
                                style={styles.searchBox}
                            />

                        </View>
                        <View style={styles.box}>
                            <Image source={require('../assets/filter.png')} style={{ height: 20, width: 20 }} />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{
                backgroundColor: '#FF9F9',
                flex: 0.13,

            }}>
                <View style={{
                    paddingHorizontal: 24,

                }}>
                    <ImageBackground
                        source={require('../assets/banner.png')}
                        style={styles.banner}>
                        <View style={styles.promo}>
                            <Text style={styles.promoText}>Promo</Text>

                        </View>
                        <Text style={styles.buyText}>Buy one get {'\n'}one FREE</Text>

                    </ImageBackground>

                </View>

            </View>
            <View style={{ flex: 0.53, }}>
                <View style={{ paddingHorizontal: 24 }}>
                    <FlatList
                        data={apiData}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <View style={{ width: 75, height: 21 }}>
                            <Text style={styles.flatData}>{item.ingredients}</Text>
                        </View>}
                        horizontal={true}

                    />
                </View>
                <View style={{
                    paddingVertical: 20,
                }}>
                    <FlatList
                        data={apiData}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item.id.toString()} // Ensure item.id is converted to a string
                        numColumns={2}
                        // renderItem={(item) => <Text>{console.log(item,'111')}</Text>}
                        renderItem={(item) => <RenderItemScreen item={item.item} 
                        navigation={navigation} 
                         addToCart={addToCart}
                         selectedItems={selectedItems}
                         />
                         
                        }
                    />

                </View>
            </View>

        </Animated.View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 0.34,
        backgroundColor: "#111111",
    },
    searchBox: {
        marginLeft: 8,
        fontSize: 14,
        color: '#A2A2A2',
        fontWeight: '400',
    },
    location: {
        color: '#A2A2A2',
        fontSize: 12,
        fontWeight: "400"
    },
    address: {
        color: '#D8D8D8',
        fontSize: 14,
        fontWeight: "600"
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#A2A2A2',
        alignItems: 'center',
        width: '80%',
        borderRadius: 12,
        paddingHorizontal: 20

    },
    box: {
        height: 52,
        width: 52,
        backgroundColor: '#C67C4E',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchItem: {
        flexDirection: 'row',
        marginVertical: 24,
        alignItems: 'center',
        justifyContent: 'space-between',


    },
    banner: {
        width: 345,
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative',
        bottom: 70,
        paddingHorizontal: 24,
        paddingVertical: 20,

    },
    promo: {
        backgroundColor: '#ED5151',
        height: 26, width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 10
    },
    promoText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600'
    },
    buyText: {
        fontSize: 32,
        fontWeight: '600',
        color: '#fff'
    },
    headerContainer: {
        marginTop: 68,
        marginHorizontal: 24
    },
    flatData: {
        fontSize: 14,
        fontWeight: '600',
        color: '#313131'
    }

})

export default HomeScreen;
