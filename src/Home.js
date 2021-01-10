import React from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity, ImageBackground
} from 'react-native';
import gateway from '../assets/gateway.jpg'
import calender from '../assets/calendar.png'
import { Grid } from 'native-base';
import { Button, Icon, Footer, FooterTab } from "native-base";

const Home = (props) => {
  return (
   <SafeAreaView style={{flex: 1}}>
<ImageBackground source={gateway} style={styles.backimage}>
     <Grid style={styles.container}>
      <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={()=>{props.navigation.navigate("ServiceSchedule")}}>
          <Image
            source={calender}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Service Schedule
          </Text>
        </TouchableOpacity>

   

        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={()=>{props.navigation.navigate("SuccessStories")}}>
          <Image
            source={calender}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Success Storiesssss
          </Text>
        </TouchableOpacity>
       
        </Grid>
        <Grid style={styles.container}>
        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={()=>{props.navigation.navigate("News")}}>
          <Image
            source={calender}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
           News
          </Text>
        </TouchableOpacity>

   

        <TouchableOpacity
          style={styles.buttonGPlusStyle}
          activeOpacity={0.5}
          onPress={()=>{props.navigation.navigate("Volunteers")}}>
          <Image
            source={calender}
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
           Volunteers
          </Text>
        </TouchableOpacity>
       
        </Grid> 
         
        <Footer>
          <FooterTab style={styles.footer}>
          <Button>
               <Icon>{calender}</Icon>
                  </Button>
                  <Button>
                  <Text>Contact</Text>
                  </Button>
                  <Button>
                  <Text>Contact</Text>
                  </Button>
          </FooterTab>
        </Footer>
         </ImageBackground>



    </SafeAreaView>
   
  );
};



const drawerNavigator=()=>{
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    padding: 30,
   justifyContent:'center'
  },
  buttonGPlusStyle: {
    flexDirection: 'column',
    alignItems: 'center',
  backgroundColor: 'rgba(10, 118, 186, 0.7)',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    borderRadius: 8,
    margin: 20,
    width:150,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 25,
    resizeMode:'stretch'
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    marginTop:10
  },
  backimage:{
    flex:1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  footer:{
    backgroundColor:'#0b77ba'
  }
  
});

export default Home;