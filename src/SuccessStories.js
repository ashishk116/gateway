import { Button,Card,CardItem } from 'native-base';
import React, { useState } from 'react'
import {Text, View,FlatList,Image,ActivityIndicator} from 'react-native'
import MapView,{ Marker } from 'react-native-maps';



const SuccessStories=()=>{
const [mapActive,setMapActive]= useState(false)

const [items,setItems]=useState({isLoading:true,dataSource:[]})

function ActivateMap(){
    setMapActive(true)
}

return(<View style={{flex:1,backgroundColor:'#6ab04c',justifyContent:'center'}}>







  {mapActive &&  <MapView
      style={{ flex: 1 }}
      initialRegion={{latitude:33.747564,
      longitude: -84.394496,
      latitudeDelta: 0.009,
      longitudeDelta: 0.009}}
      
    >
      <Marker coordinate={{ latitude:33.747564, longitude: -84.394496 }} />
    </MapView>}
    <Button onPress={ActivateMap} style={{width:200,justifyContent:'center',marginLeft:150}} warning><Text>Click For Location </Text></Button>
    </View>
)
}

export default SuccessStories;