import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet,Button, View, Text, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
// import img from "../../../assets/happy-birthday.png"
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { FlatGrid } from 'react-native-super-grid';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './carousel.component'
import { data } from './carousel.component';
import { HOME_DATA, EVENTS_DATA } from '../../data';
import Grid from './grid/grid.component';
import userService from "../../services/user"
import vehicleService from "../../services/vehicle"
import eventService from "../../services/events"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  const [user, setUser] = useState({})
  const [gadgets, setGadgets] = useState([])
  const [vehicles, setVehicles] = useState({})

  useEffect(() => {
    AsyncStorage.getItem('user').then((value) => {
      setUser(JSON.parse(value))
    })
  }, [])

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('users')
        if(value == null){
          const users = await userService.getAllUsers()
          setGadgets(users)
          await AsyncStorage.setItem('users', JSON.stringify(users))
        }
      }catch(e){
        console.log('e == ', e)
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('vehicles')
        if(value == null){
          const vehicles = await vehicleService.getAllVehicles()
          setVehicles(vehicles)
          await AsyncStorage.setItem('vehicles', JSON.stringify(vehicles))
        }
      }catch(e){
        console.log('e == ', e)
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      try {
        const value = await AsyncStorage.getItem('events')
        if(value == null){
          const events = await eventService.getAllEvents()
          await AsyncStorage.setItem('events', JSON.stringify(events))
        }
      }catch(e){
        console.log('e == ', e)
      }
    })()
  }, [])

//   useEffect(() => {
//     AsyncStorage.getItem('users').then(data => {
//       setGadgets(JSON.parse(data))
//       console.log('gadgets in async -=== ', gadgets.length)
//     })
// }, [])

// useEffect(() => {
//     AsyncStorage.getItem('vehicles').then(data => {
//       setVehicles(JSON.parse(data))
//       console.log('vehicles in async -=== ', vehicles)
//     })
// },[])

  const isCarousel = useRef(null)
  const onPressLearnMore = (item) => {
    navigation.navigate('Details', {
      name: item.name,
      code: item.code
    })
  }

  return (
    <View style={[styles.mainContainer]}>
      {/* <Button title='Logout' onPress={logout}></Button> */}
      <View >
      <Carousel
        layout="default"
        layoutCardOffset={0}
        ref={isCarousel}
        data={EVENTS_DATA}
        renderItem={CarouselCardItem}
        sliderWidth={420}
        itemWidth={400}
        inactiveSlideShift={0}
        useScrollView={true}
      />
      </View>
      <Grid gadgetsData={gadgets} vehiclesData={vehicles} navigation={navigation} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: '#dee0df'
  },
  
})
// const styles = StyleSheet.create({
//   gridView: {
//     marginTop: 10,
//     flex: 1,
//   },
//   itemContainer: {
//     justifyContent: 'flex-end',
//     borderRadius: 5,
//     padding: 10,
//     marginTop: 40,
//     height: 150,
//     borderWidth: 4,
//     borderColor: "#20232a",
//   },
//   imgStyle: {

//   },
//   itemName: {
//     fontSize: 16,
//     color: '#000',
//     fontWeight: '600',
//   },
//   itemCode: {
//     fontWeight: '600',
//     fontSize: 12,
//     color: '#2c3e50',
//   },
// });

export default Home