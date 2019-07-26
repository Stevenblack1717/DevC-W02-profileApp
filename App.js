
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import {Feather, MaterialIcons } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

//Image
const imgData = [
  { id: 1, imgSource: require('./assets/1.jpeg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/2.jpg') },
  { id: 8, imgSource: require('./assets/1.jpeg') }
];


export default function App() {
  //centre point
  const centerImgData = Math.floor(imgData.length / 2);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name = 'arrow-back' size={28}/>
        <MaterialIcons name = 'filter-list'size={28}/>
      </View>

      <View style={styles.profile}>
        <View style={styles.avatarWraper}>
          <Image style={styles.avatar}
                 source={require('./assets/ava.jpg')}
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.contentStyle}>Steven Black</Text>
          <Text style={styles.contentStyle}>Mobile Developer</Text>
          <View style={styles.buttonWraper}>
          <TouchableOpacity onPress={this.followAlert}>
            <View style={[styles.btn, styles.followButton]}>
              <Text style={styles.buttonStyle}>Follow</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.sendAlert}>
            <View style={[styles.btn,styles.drButton]}>
              <Feather name = 'send' color='white'/>
            </View>
            </TouchableOpacity>
          </View>
        </View>

      </View>
      
      <View  style={styles.infoCount}>
        <View style={styles.infoWraper}>
          <Text style={styles.nums}>0</Text>
          <Text style={styles.title}>Post</Text>
        </View>
        <View style={styles.infoWraper}>
          <Text style={styles.nums}>17</Text>
          <Text style={styles.title}>Followers</Text>
        </View>
        <View style={styles.infoWraper}> 
          <Text style={styles.nums}>11</Text>
          <Text style={styles.title}>Following</Text>
        </View>
      </View>
      <View style={styles.imageWrapper}>
      <ScrollView  contentContainerStyle={styles.imageGrid}>          
      <View>
        {imgData.slice(0, centerImgData).map(item => {
          return <Image source={item.imgSource} style={styles.image} key={item.id}/>
        })}
      </View>
      <View>
        {imgData.slice(centerImgData).map(item => {
          return <Image source={item.imgSource} style={styles.image} key={item.id} />
        })}
      </View>      
      </ScrollView>
      </View>   
      
      <View style={styles.bottom}>
        <Feather name = 'home' size={22} />
        <Feather name = 'plus-circle'size={22}/>
        <Feather name = 'user'size={22} />
      </View>
    </View>
  );
}

followAlert = () => {
  Alert.alert(
    "Follow",
    "Followed",
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
    ],
    {cancelable: false}
  )
}

sendAlert = () => {
  Alert.alert(
    "Send Message",
    "Message sended",
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
    ],
    {cancelable: false}
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header:
  {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  profile:
  {
    flex: 0.3,
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatarWraper:
  {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar:
  {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  userInfo:
  {
    flex: 0.6,
    justifyContent: 'center'

  },
  contentStyle:
  {
    fontSize: 16,
    fontWeight: 'bold'
  },
  btn:
  {
    height: 30,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
      shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  followButton:
  {
    width: 100,
    backgroundColor: FOLLOW_COLOR,
  },
  drButton:
  {
    width: 60,
    marginLeft: 15,
    backgroundColor: SEND_MESSAGE_COLOR,
  },
  buttonWraper:
  {
    flexDirection: 'row',
    marginTop: 15
  },
  buttonStyle:
  {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },

  infoCount:
  {
    flex: 0.15,
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  nums:
  {
    fontSize: 16,
    fontWeight: 'bold',

  },
  title:
  {
    fontSize: 14,

  },
  infoWraper:
  {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageWrapper:
  {
    flex: 0.8
  },
  imageGrid:
  {
    
    backgroundColor:'white',
    flexDirection: 'row',
    justifyContent: 'center'
    
  },
 image:
  {
    width: 150,
    height: 150,
    margin: 10,
    borderRadius: 10
  },
  bottom:
  {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});
