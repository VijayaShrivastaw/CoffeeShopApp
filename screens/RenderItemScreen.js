import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

const RenderItemScreen = (props) => {
  const { item, navigation ,addToCart} = props;
  // console.log(props.selectedItems)
  // console.log(navigation.navigation.navigate)
  // const onPressAble = () => {

  //   navigation.navigation.navigate('DetailsScreen',{Text: console.log(item,'55')})
  // }
  return (
    <>
      {/* <Text>hello</Text> */}
      <View style={{ padding: 20, }}>
        <View style={{}}>
          <TouchableOpacity onPress={() => {
            navigation.navigation.navigate('DetailsScreen', { item: item , selectedItems:props.selectedItems})

            // console.log(item,'99')
          }

          }>
            <Image source={{uri: item.image}} style={{
              height: 128,
              width: 156, resizeMode: 'cover', borderRadius: 10
            }} />
          </TouchableOpacity>
          <Text style={styles.flatitem}>{item.title}</Text>
          <Text style={{ color: '#A2A2A2', fontSize: 14, fontWeight: '400', marginVertical: 5 }}>{item.title}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: '#050505', fontWeight: '600', fontSize: 18 }}>$4.54</Text>
            <TouchableOpacity style={styles.plus} onPress={()=> addToCart(item)}>
              <Image source={require('../assets/plus.png')} style={{ height: 16, width: 16, }} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  flatitem: {
    fontSize: 14,
    fontWeight: '600',
    color: '#313131',
    marginTop: 8
  },
  plus: {
    backgroundColor: '#C67C4E',
    height: 32,
    width: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default RenderItemScreen