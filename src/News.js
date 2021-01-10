import React from 'react'
import {Text, View,FlatList,Image,ActivityIndicator} from 'react-native'

import { WebView } from 'react-native-webview';
const News=()=>{

const [items,setItems]=useState({
  isLoading:true,
  dataSource:[]})


  getNewsFromApi=()=>{
    return(
      fetch("")
    )

  }

return(
    <WebView
        source={{
          uri: 'https://www.gatewayctr.org/in-the-news/'
        }}
        style={{ marginTop: 20 }}
      />
)
}

export default News;